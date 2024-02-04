import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { Article, ArticleViewWay } from "entity/Article";
import { ArticlesSchema } from "../types/articles";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";

const articlesAdapter = createEntityAdapter<Article>({
	selectId(comment: Article) {
		return comment.id;
	},
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articlesAdapter.getInitialState({})
);

const articlesSlice = createSlice({
	name: "articles",
	initialState: articlesAdapter.getInitialState<ArticlesSchema>({
		isLoading: false,
		ids: [],
		entities: {},
		view: ArticleViewWay.LIST,
		hasMore: true,
		limit: 8,
		page: 1
	}),
	reducers: {
		setView(state, action: PayloadAction<ArticleViewWay>) {
			state.view = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchArticles.pending, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});

		builder.addCase(fetchArticles.fulfilled, (state, action) => {
			state.isLoading = false;
			articlesAdapter.addMany(state, action.payload);
			state.hasMore = action.payload.length > 0;
		});

		builder.addCase(fetchArticles.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const {
	actions: articlesActions,
	reducer: articlesReducer,
} = articlesSlice;
