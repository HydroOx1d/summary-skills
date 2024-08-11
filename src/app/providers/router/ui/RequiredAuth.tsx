import { getUserAuthData } from "@/entity/User";
import { getMainRoute } from "@/shared/constants/router";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({children}: React.PropsWithChildren) => {
	const isAuth = useSelector(getUserAuthData);

	if(!isAuth) {
		return <Navigate to={getMainRoute()}/>;
	}
	return children;
};

export default RequiredAuth;