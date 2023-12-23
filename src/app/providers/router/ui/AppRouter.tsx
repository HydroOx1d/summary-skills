import { getUserAuthData } from "entity/User";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = React.memo(function AppRouter() {
	const isAuth = useSelector(getUserAuthData);

	const routeList = React.useMemo(() => {
		return routeConfig.filter((route) => {
			if (route.onlyAuth && !isAuth) {
				return false;
			}

			return true;
		});
	}, [isAuth]);

	return (
		<React.Suspense fallback={<PageLoader/>}>
			<Routes>
				{routeList.map(({path, element}) => {
					return (
						<Route key={path} path={path} element={element}/>
					);
				})}
			</Routes>
		</React.Suspense>
	);
});
