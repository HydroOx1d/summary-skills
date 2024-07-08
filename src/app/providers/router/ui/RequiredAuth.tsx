import { getUserAuthData } from "@/entity/User";
import { routePath } from "@/shared/constants/router";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({children}: React.PropsWithChildren) => {
	const isAuth = useSelector(getUserAuthData);

	if(!isAuth) {
		return <Navigate to={routePath.main}/>;
	}
	return children;
};

export default RequiredAuth;