import { StateSchema } from "app/providers/store";
import { ArticleViewWay } from "entity/Article";


export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesView = (state: StateSchema) => state.articles?.view || "list" as ArticleViewWay;