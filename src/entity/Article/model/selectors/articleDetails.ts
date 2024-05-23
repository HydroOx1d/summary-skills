import { createSelector } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/store";
import { getUserAuthData } from "entity/User";

export const getArticleData = (state: StateSchema) => state.article?.data;
export const getArticleError = (state: StateSchema) => state.article?.error;
export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading || false;

export const getArticleCanEdit = createSelector(getArticleData, getUserAuthData, (artcileData, userData) => {
	if (!artcileData || !userData) {
		return false;
	}

	return artcileData.user.id === userData.id;
});