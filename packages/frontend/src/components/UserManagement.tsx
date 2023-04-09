import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiClient } from "../apiClient";
import { toast } from "react-toastify";

interface UserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  role: string;
}

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: users,
  } = useQuery("getAllUser", () => apiClient("/users"));

  const deleteUserMutation = useMutation(
    (id: number) => apiClient(`/users/${id}`, "DELETE"),
    {
      onSuccess: () => {
        toast.success("User deleted successfully");
        queryClient.invalidateQueries("getAllUser");
      },
    }
  );

  const updateUserMutation = useMutation(
    (updatedUser: UserData) =>
      apiClient(`/users/${updatedUser.id}`, "PUT", updatedUser),
    {
      onSuccess: () => {
        toast.success("User updated successfully");
        queryClient.invalidateQueries("getAllUser");
      },
    }
  );

  const handleDelete = (id: number) => {
    deleteUserMutation.mutate(id);
  };

  const handleUpdate = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleSubmitUpdate = (updatedUser: UserData) => {
    updateUserMutation.mutate(updatedUser);
    setSelectedUser(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      <h1 className="text-2xl font-semibold mb-6 text-blue-600">
        User Management
      </h1>
      <button className="bg-blue-500 text-white px-4 py-2 mb-4">
        Add New User
      </button>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserData) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 mb-4"
                  onClick={() => handleUpdate(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 mb-4"
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-gray-100 p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitUpdate(selectedUser);
            }}
          >
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                value={selectedUser.firstName}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                value={selectedUser.lastName}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-400 p-2 w-full"
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                value={selectedUser.role}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    role: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 mr-4"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
