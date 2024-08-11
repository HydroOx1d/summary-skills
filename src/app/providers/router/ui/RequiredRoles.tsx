import { getUserAuthData, getUserRoles, UserRoles } from "@/entity/User";
import { getForbiddenRoute } from "@/shared/constants/router";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RequiredRolesProps {
  roles?: UserRoles[]
}

const RequiredRoles = ({children, roles}: React.PropsWithChildren<RequiredRolesProps>) => {
	const isAuth = useSelector(getUserAuthData);
	const userRoles = useSelector(getUserRoles);

	const isAdmin = useMemo(() => {
		if (!roles) {
			return true;
		}

		return userRoles?.some(role => roles?.includes(role));
	},[roles, userRoles]);

	if(!isAdmin) {
		return <Navigate to={getForbiddenRoute()}/>;
	}
	return children;
};

export default RequiredRoles;