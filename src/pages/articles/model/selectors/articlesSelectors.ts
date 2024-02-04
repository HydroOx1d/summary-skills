import { StateSchema } from "app/providers/store";
import { ArticleViewWay } from "entity/Article";


export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesView = (state: StateSchema) => state.articles?.view || "list" as ArticleViewWay;

export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 8;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;