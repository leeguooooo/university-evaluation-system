// src/App.tsx

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* 其他路由规则 */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
