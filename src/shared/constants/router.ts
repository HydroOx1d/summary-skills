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