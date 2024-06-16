import { getUserAuthData } from "@/entity/User";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routePath } from "@/shared/config/routeConfig/routeConfig";

const RequiredAuth = ({children}: React.PropsWithChildren) => {
	const isAuth = useSelector(getUserAuthData);

	if(!isAuth) {
		return <Navigate to={routePath.main}/>;
	}
	return children;
};

export default RequiredAuth;