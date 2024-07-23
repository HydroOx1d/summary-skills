import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/widgets/PageLoader";
import RequiredAuth from "./RequiredAuth";
import RequiredRoles from "./RequiredRoles";
import { AppRouteProps } from "@/shared/types";
import { routeConfig } from "../config/routerConfig";

export const AppRouter = React.memo(function AppRouter() {

	const routeWrapper = React.useCallback(({path, element, onlyAuth, roles}: AppRouteProps) => {

		return (
			<Route key={path} path={path} element={onlyAuth 
				? <RequiredAuth>
					<RequiredRoles roles={roles}>
						{element}
					</RequiredRoles>
				</RequiredAuth> 
				: element}
			/>
		);
	}, []);

	return (
		<React.Suspense fallback={<PageLoader/>}>
			<Routes>
				{routeConfig.map(routeWrapper)}
			</Routes>
		</React.Suspense>
	);
});
