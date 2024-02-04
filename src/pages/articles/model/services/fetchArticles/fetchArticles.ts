import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Article } from "entity/Article";
import { getArticlesLimit } from "../../selectors/articlesSelectors";

interface FetchArticlesProps {
	page: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
	"articles/fetchArticles",
	async ({page = 1}, thunkAPI) => {

		const limit = getArticlesLimit(thunkAPI.getState());

		try {
			const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit
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
