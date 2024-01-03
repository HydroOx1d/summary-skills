import { createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/article";
import { getArticleById } from "../services/getArticleById/getArticleById";

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	data: undefined,
	error: undefined
};

export const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		
	},
	extraReducers(builder) {
		builder.addCase(getArticleById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = undefined;
			state.data = action.payload;
		});
		builder.addCase(getArticleById.pending, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(getArticleById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: articleActions, reducer: articleReducer } = articleSlice;
