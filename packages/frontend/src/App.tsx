// src/App.tsx

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import AdminPanel from "./components/AdminPanel";

import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
      // 判断当前是不是 / 获取 /login
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/login"
      ) {
        window.location.href = "/dashboard";
      }
    } else {
      setIsLoggedIn(false);
      if (window.location.pathname !== "/login")
        window.location.href = "/login";
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* 其他路由规则 */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
