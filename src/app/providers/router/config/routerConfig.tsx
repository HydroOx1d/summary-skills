import { UserRoles } from "@/entity/User";
import { AboutPage } from "@/pages/about";
import { AdminPanelPagePage } from "@/pages/adminPanelPage";
import { ArticleDetailPage } from "@/pages/articleDetail";
import { ArticlePage } from "@/pages/articles";
import { ForbiddenPagePage } from "@/pages/forbiddenPage";
import { HomePage } from "@/pages/home";
import { NotFound } from "@/pages/notFound";
import { ProfilePage } from "@/pages/profile";
import { getAboutRoute, getAdminRoute, getArticlesRoute, getForbiddenRoute, getMainRoute, getProfleRoute } from "@/shared/constants/router";
import { AppRouteProps } from "@/shared/types";

export const routeConfig: AppRouteProps[] = [
	{
		path: getMainRoute(),
		element: <HomePage />,
	},
	{
		path: getAboutRoute(),
		element: <AboutPage />,
	},
	{
		path: getProfleRoute(":profileId"),
		element: <ProfilePage />,
		onlyAuth: true,
	},
	{
		path: getArticlesRoute(),
		element: <ArticlePage />,
		onlyAuth: true,
	},
	{
		path: getArticlesRoute(":articleId"),
		element: <ArticleDetailPage />,
		onlyAuth: true,
	},
	{
		path: getAdminRoute(),
		element: <AdminPanelPagePage />,
		onlyAuth: true,
		roles: [UserRoles.ADMIN]
	},
	{
		path: getForbiddenRoute(),
		element: <ForbiddenPagePage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];