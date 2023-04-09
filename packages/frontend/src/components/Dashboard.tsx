import React from "react";
// import AttendanceRecords from "./AttendanceRecords";
// import CourseEvaluations from "./CourseEvaluations";
import UserProfile from "./UserProfile";
// import AdminPanel from "./AdminPanel";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        {/* <UserProfile /> */}
        {/* <AttendanceRecords /> */}
        {/* <CourseEvaluations /> */}
        {/* 如果当前用户是管理员，显示 AdminPanel 组件 */}
        {/* <AdminPanel /> */}
      </div>
    </div>
  );
};

export default Dashboard;
