import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthProtector = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ pathname });

    if (isAuthenticated && pathname.includes("/auth")) {
      navigate("/");
    }
    if (!isAuthenticated && !pathname.includes("/auth")) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, pathname]);

  return <>{children}</>;
};

export default AuthProtector;
