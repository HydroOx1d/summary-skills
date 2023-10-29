import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { NotFound } from "pages/notFound";
import { RouteProps } from "react-router-dom";


export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
	NOT_FOUND = "not_found"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: RouteProps[] = [
	{
		path: routePath.main,
		element: <HomePage/>
	},
	{
		path: routePath.about,
		element: <AboutPage/>
	},
	{
		path: routePath.not_found,
		element: <NotFound/>
	}
];