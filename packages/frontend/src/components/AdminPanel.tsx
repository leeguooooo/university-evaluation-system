import React from "react";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import Navbar from "./Navbar";

const AdminPanel: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
          <UserManagement />
          <CourseManagement />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
