import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { IComment } from "entity/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string,
  ThunkConfig<string>
>(
	"articleDetailsComments/fetchCommentsByArticleId",
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<IComment[]>("/comments", {
				params: {
					articleId,
					_expand: "user",
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
