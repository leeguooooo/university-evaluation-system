import { useNavigate } from "react-router-dom";

const useRedirectToLogin = () => {
  const navigate = useNavigate();
  localStorage.removeItem("accessToken");
  navigate("/login");
};

export default useRedirectToLogin;
