import { UserRoles } from "entity/User";
import { AboutPage } from "pages/about";
import { AdminPanelPagePage } from "pages/adminPanelPage";
import { ArticleDetailPage } from "pages/articleDetail";
import { ArticlePage } from "pages/articles";
import { ForbiddenPagePage } from "pages/forbiddenPage";
import { HomePage } from "pages/home";
import { NotFound } from "pages/notFound";
import { ProfilePage } from "pages/profile";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
	onlyAuth?: boolean;
	roles?: UserRoles[];
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
	ADMIN = "admin",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE_DETAIL = "article_detail",
	FORBIDDEN = "forbidden",
	NOT_FOUND = "not_found"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile/", // :profileId
	[AppRoutes.ARTICLES]: "/articles",
	[AppRoutes.ARTICLE_DETAIL]: "/articles/", // :articleId
	[AppRoutes.ADMIN]: "/admin",
	[AppRoutes.FORBIDDEN]: "/forbidden",
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
		path: routePath.profile + ":profileId",
		element: <ProfilePage />,
		onlyAuth: true,
	},
	{
		path: routePath.articles,
		element: <ArticlePage />,
		onlyAuth: true,
	},
	{
		path: routePath.article_detail + ":articleId",
		element: <ArticleDetailPage />,
		onlyAuth: true,
	},
	{
		path: routePath.admin,
		element: <AdminPanelPagePage />,
		onlyAuth: true,
		roles: [UserRoles.ADMIN]
	},
	{
		path: routePath.forbidden,
		element: <ForbiddenPagePage />,
	},
	{
		path: routePath.not_found,
		element: <NotFound />,
	},
];