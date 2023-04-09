import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { apiClient } from "../apiClient";
import Navbar from "./Navbar";

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { isLoading, error, data } = useQuery("userProfile", () =>
    apiClient("/auth/me")
  );

  const updateUserMutation = useMutation((updatedUser: any) =>
    apiClient(`/users/${updatedUser.id}`, "PUT", updatedUser)
  );

  const handleEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const updatedUser = Object.fromEntries(formData.entries());

    await updateUserMutation.mutateAsync(updatedUser);
    setIsEditing(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user profile</div>;

  const { id, email, firstName, lastName } = data;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">User Profile</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              disabled={!isEditing}
              className={`border-2 ${
                isEditing
                  ? "border-blue-500 bg-white"
                  : "border-gray-200 bg-gray-100"
              } rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none transition-all duration-300`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={firstName}
              disabled={!isEditing}
              className={`border-2 ${
                isEditing
                  ? "border-blue-500 bg-white"
                  : "border-gray-200 bg-gray-100"
              } rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none transition-all duration-300`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={lastName}
              disabled={!isEditing}
              className={`border-2 ${
                isEditing
                  ? "border-blue-500 bg-white"
                  : "border-gray-200 bg-gray-100"
              } rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none transition-all duration-300`}
            />
          </div>
          <input type="hidden" name="id" value={id} />
          <button
            type="button"
            onClick={handleEditButtonClick}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow mr-2 hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 active:bg-green-700 focus:outline-none transition-all duration-300"
            >
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
