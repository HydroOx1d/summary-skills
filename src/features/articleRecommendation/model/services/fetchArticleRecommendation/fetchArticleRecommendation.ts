import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Article } from "entity/Article";


export const fetchArticleRecommendation = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	"artcileRecommendation/fetchArticleRecommendation",
	async (_, thunkAPI) => {

		try {
			const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
				params: {
					_limit: 4,
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
