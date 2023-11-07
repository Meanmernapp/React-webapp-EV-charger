import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, redirectTo, children }) => {
  // Replace this with your actual logic to get the user's role
  const userRole = "driver"; // Replace with your actual role retrieval logic

  if (allowedRoles.includes(userRole)) {
    // User has the allowed role, allow access to the route
    return children;
  } else {
    // User does not have the allowed role, redirect to the specified route
    // return <Navigate to={redirectTo} replace />;
  }
};

export default ProtectedRoute;
