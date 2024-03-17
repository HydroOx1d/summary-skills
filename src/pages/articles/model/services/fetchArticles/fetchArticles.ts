import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Article, ArticleType } from "entity/Article";
import { getArticlesLimit, getArticlesOrder, getArticlesPageNum, getArticlesSearch, getArticlesSort, getArticlesType } from "../../selectors/articlesSelectors";

interface FetchArticlesProps {
	replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
	"articles/fetchArticles",
	async (_, thunkAPI) => {

		const limit = getArticlesLimit(thunkAPI.getState());
		const page = getArticlesPageNum(thunkAPI.getState());
		const sort = getArticlesSort(thunkAPI.getState());
		const order = getArticlesOrder(thunkAPI.getState());
		const search = getArticlesSearch(thunkAPI.getState());
		const type = getArticlesType(thunkAPI.getState());

		try {
			const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
					_sort: sort,
					_order: order,
					q: search,
					type: type === ArticleType.ALL ? undefined : type
				},
			});

			if (!response.data) {
				throw new Error("no user");
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue("Something went wrong");
		}
	}
);
