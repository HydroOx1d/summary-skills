import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { getArticlesInited } from "../../selectors/articlesSelectors";
import { articlesActions } from "../../slice/articlesSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { ArticleSortField, ArticleType } from "entity/Article";
import type { SortOrder } from "shared/types";

export const initialFetchArticles = createAsyncThunk<void, void, ThunkConfig<void>>(
	"articles/initialFetchArticles",
	async (_, thunkAPI) => {
		const inited = getArticlesInited(thunkAPI.getState());

		const searchParams = new URLSearchParams(location.search);

		const {sort, order, search, type} = Object.fromEntries(searchParams.entries());

		if (!inited) {
			if (sort) {
				thunkAPI.dispatch(articlesActions.setSort(sort as ArticleSortField));
			}

			if (order) {
				thunkAPI.dispatch(articlesActions.setOrder(order as SortOrder));
			}

			if (search) {
				thunkAPI.dispatch(articlesActions.setSearch(search));
			}

			if (type) {
				thunkAPI.dispatch(articlesActions.setType(type as ArticleType));
			}

			thunkAPI.dispatch(articlesActions.setInited());
			thunkAPI.dispatch(fetchArticles({}));
		}
	}
);
