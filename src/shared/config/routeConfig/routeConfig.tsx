import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { RouteProps } from "react-router-dom";


export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about"
};

export const routeConfig: RouteProps[] = [
	{
		path: routePath.main,
		element: <HomePage/>
	},
	{
		path: routePath.about,
		element: <AboutPage/>
	}
];