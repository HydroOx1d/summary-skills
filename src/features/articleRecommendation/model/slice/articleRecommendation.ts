import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { Article } from "entity/Article";
import { ArticleRecommendationSchema } from "../types/articleRecommendationSchema";
import { fetchArticleRecommendation } from "../services/fetchArticleRecommendation/fetchArticleRecommendation";

const recommendationAdapter = createEntityAdapter<Article>({
	selectId(article: Article) {
		return article.id || 0;
	}
});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>((state) => state.articleRecommendation || recommendationAdapter.getInitialState({}));

const articleRecommendationSlice = createSlice({
	name: "artcileRecommendation",
	initialState: recommendationAdapter.getInitialState<ArticleRecommendationSchema>({
		isLoading: false,
		ids: [],
		entities: {},
	}),
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendation.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchArticleRecommendation.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				recommendationAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendation.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export const { actions: articleRecommendationActions, reducer: articleRecommendationReducer } = articleRecommendationSlice;
