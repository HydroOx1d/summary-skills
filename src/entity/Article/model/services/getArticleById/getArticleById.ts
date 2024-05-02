import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Article } from "../../types/article";

export const getArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/getArticleById", async (articleId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
			params: {
				_expand: "user"
			}
		});

		if (!response.data) {
			throw new Error("no user");
		}

		return response.data;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue("Something went wrong");
	}
});
