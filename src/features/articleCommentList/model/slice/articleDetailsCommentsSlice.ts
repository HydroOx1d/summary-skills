import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { IComment } from "entity/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/articleDetailsCommentsSchema";

const commentAdapter = createEntityAdapter<IComment>({
	selectId(comment: IComment) {
		return comment.id || 0;
	}
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>((state) => state.articleComments || commentAdapter.getInitialState({}));

const articleDetailsCommentsSlice = createSlice({
	name: "articleDetailsComments",
	initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		ids: [],
		entities: {},
	}),
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
				state.isLoading = false;
				commentAdapter.setAll(state, action.payload);
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export const { actions: articleDetailsCommentsActions, reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
