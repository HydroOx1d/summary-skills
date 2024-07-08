import { UserRoles } from "@/entity/User";
import { AboutPage } from "@/pages/about";
import { AdminPanelPagePage } from "@/pages/adminPanelPage";
import { ArticleDetailPage } from "@/pages/articleDetail";
import { ArticlePage } from "@/pages/articles";
import { ForbiddenPagePage } from "@/pages/forbiddenPage";
import { HomePage } from "@/pages/home";
import { NotFound } from "@/pages/notFound";
import { ProfilePage } from "@/pages/profile";
import { routePath } from "@/shared/constants/router";
import { AppRouteProps } from "@/shared/types";

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