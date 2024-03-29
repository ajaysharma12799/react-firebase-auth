import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
	const { user } = useUserAuth();
	if (!user) {
		return <Navigate to="/" />;
	}
	return <div>{children}</div>;
};

export default ProtectedRoute;
