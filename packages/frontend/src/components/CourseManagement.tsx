import React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../apiClient";

const CourseManagement = () => {
  const {
    isLoading,
    error,
    data: courses,
  } = useQuery("courses", () => apiClient("/courses"));

  // ...其他状态和函数，例如处理课程添加、修改和删除操作

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching courses</div>;

  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      <h1>Course Management</h1>
      {/* 在此处添加显示和管理课程列表的表格或其他组件 */}
    </div>
  );
};

export default CourseManagement;
