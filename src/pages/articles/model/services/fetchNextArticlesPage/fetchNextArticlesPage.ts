import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/store";
import { getArticlesHasMore, getArticlesIsLoading, getArticlesPageNum } from "../../selectors/articlesSelectors";
import { articlesActions } from "../../slice/articlesSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchNextPageArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articles/fetchNextPageArticles",
	async (_, thunkAPI) => {
		const hasMore = getArticlesHasMore(thunkAPI.getState());
		const isLoading = getArticlesIsLoading(thunkAPI.getState());
		const page = getArticlesPageNum(thunkAPI.getState());

		if (hasMore && !isLoading) {
			thunkAPI.dispatch(articlesActions.setPage(page + 1));
			thunkAPI.dispatch(
				fetchArticles({})
			);
		}
	}
);
