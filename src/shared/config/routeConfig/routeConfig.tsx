import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { NotFound } from "pages/notFound";
import { ProfilePage } from "pages/profile";
import { RouteProps } from "react-router-dom";

type AppRouteProps = RouteProps & {
	onlyAuth?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
	PROFILE = "profile",
	NOT_FOUND = "not_found"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: AppRouteProps[] = [
	{
		path: routePath.main,
		element: <HomePage />,
	},
	{
		path: routePath.about,
		element: <AboutPage />,
	},
	{
		path: routePath.profile,
		element: <ProfilePage />,
		onlyAuth: true
	},
	{
		path: routePath.not_found,
		element: <NotFound />,
	},
];