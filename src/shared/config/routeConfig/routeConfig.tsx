import { AboutPage } from "pages/about";
import { ArticleDetailPage } from "pages/articleDetail";
import { ArticlePage } from "pages/articles";
import { HomePage } from "pages/home";
import { NotFound } from "pages/notFound";
import { ProfilePage } from "pages/profile";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
	onlyAuth?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE_DETAIL = "article_detail",
	NOT_FOUND = "not_found"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile", // :profileId
	[AppRoutes.ARTICLES]: "/articles",
	[AppRoutes.ARTICLE_DETAIL]: "/articles", // :articleId
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
		path: routePath.profile + "/:profileId",
		element: <ProfilePage />,
		onlyAuth: true,
	},
	{
		path: routePath.articles,
		element: <ArticlePage />,
		onlyAuth: true,
	},
	{
		path: routePath.article_detail + "/:articleId",
		element: <ArticleDetailPage />,
		onlyAuth: true,
	},
	{
		path: routePath.not_found,
		element: <NotFound />,
	},
];