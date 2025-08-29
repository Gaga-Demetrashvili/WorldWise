/** @format */

import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext"; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Assuming you have an auth context that provides this
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/"); // Redirect to the login page if not authenticated
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
