import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/store";
import { getArticleData } from "@/entity/Article";
import { IComment } from "@/entity/Comment";
import { getUserAuthData } from "@/entity/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const sendNewCommentForArticle = createAsyncThunk<IComment, string, ThunkConfig<string>>(
	"articleDetailsComments/sendNewComment",
	async (text, thunkAPI) => {
		const userData = getUserAuthData(thunkAPI.getState());
		const articleData = getArticleData(thunkAPI.getState());

		if (!userData || !text || !articleData) {
			return thunkAPI.rejectWithValue("error");
		}

		try {
			const response = await thunkAPI.extra.api.post<IComment>("/comments", {
				articleId: articleData.id,
				userId: userData.id,
				content: text,
			});

			if (!response.data) {
				return thunkAPI.rejectWithValue("Impossible to add a new comment");
			}

			thunkAPI.dispatch(fetchCommentsByArticleId(articleData.id));

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue("Something went wrong");
		}
	}
);
