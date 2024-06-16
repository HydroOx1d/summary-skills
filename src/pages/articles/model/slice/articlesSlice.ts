import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/store";
import { ArticleSortField, ArticleType, ArticleViewWay } from "@/entity/Article";
import type { Article } from "@/entity/Article";
import type { ArticlesSchema } from "../types/articles";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";
import { SortOrder } from "@/shared/types";

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
		view: "list" as ArticleViewWay,
		hasMore: true,
		limit: 8,
		page: 1,
		order: "asc",
		search: "",
		sort: "createdAt" as ArticleSortField,
		_inited: false,
		type: "all" as ArticleType
	}),
	reducers: {
		setView(state, action: PayloadAction<ArticleViewWay>) {
			state.view = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},

		setOrder(state, action: PayloadAction<SortOrder>) {
			state.order = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setSort(state, action: PayloadAction<ArticleSortField>) {
			state.sort = action.payload;
		},
		setInited(state) {
			state._inited = true;
		},
		setType(state, action: PayloadAction<ArticleType>) {
			state.type = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchArticles.pending, (state, action) => {
			state.isLoading = true;
			state.error = undefined;

			if (action.meta.arg.replace) {
				articlesAdapter.removeAll(state);
			}
		});

		builder.addCase(fetchArticles.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasMore = action.payload.length >= state.limit;

			if (action.meta.arg.replace) {
				articlesAdapter.setMany(state, action.payload);
			} else {
				articlesAdapter.addMany(state, action.payload);
			}
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
