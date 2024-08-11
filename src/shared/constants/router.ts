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

export const getMainRoute = () => "/";
export const getAboutRoute = () => "/about";
export const getProfleRoute = (profileId?: string) => `/profile/${profileId}`;
export const getArticlesRoute = (articleId?: string) => `/articles/${articleId}`;
export const getAdminRoute = () => "/admin";
export const getForbiddenRoute = () => "/forbidden";