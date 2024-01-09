import { StateSchema } from "app/providers/store";

export const getArticleData = (state: StateSchema) => state.article?.data;
export const getArticleError = (state: StateSchema) => state.article?.error;
export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading || false;