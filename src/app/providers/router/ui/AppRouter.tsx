import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {
	return (
		<React.Suspense fallback={<PageLoader/>}>
			<Routes>
				{routeConfig.map(({path, element}) => {
					return (
						<Route key={path} path={path} element={element}/>
					);
				})}
			</Routes>
		</React.Suspense>
	);
};
