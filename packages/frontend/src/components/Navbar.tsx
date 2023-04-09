import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCurrentUser } from "../apiClient";

const Navbar: React.FC = () => {
  const { data: currentUser } = useQuery("currentUser", getCurrentUser);

  const isAdmin = currentUser?.role === "ADMIN";
  const isSuperAdmin = currentUser?.role === "SUPER_ADMIN";

  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-white font-semibold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white font-semibold">
              Profile
            </Link>
          </li>
          {(isAdmin || isSuperAdmin) && (
            <li>
              <Link to="/admin" className="text-white font-semibold">
                Admin
              </Link>
            </li>
          )}
          {isSuperAdmin && (
            <li>
              <Link to="/superadmin" className="text-white font-semibold">
                Super Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
