import type { StateSchema } from "@/app/providers/store";
import { ArticleSortField, ArticleType, ArticleViewWay } from "@/entity/Article";


export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesView = (state: StateSchema) => state.articles?.view || "list" as ArticleViewWay;
export const getArticlesType = (state: StateSchema) => state.articles?.type || ArticleType.ALL;

export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 8;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesInited = (state: StateSchema) => state.articles?._inited;


export const getArticlesOrder = (state: StateSchema) => state.articles?.order || "asc";
export const getArticlesSort = (state: StateSchema) => state.articles?.sort || ArticleSortField.CREATED_AT;
export const getArticlesSearch = (state: StateSchema) => state.articles?.search || "";
