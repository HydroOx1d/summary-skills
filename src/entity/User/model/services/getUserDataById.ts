import type { ThunkConfig } from "@/app/providers/store";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>("user/initAuthData", async (_, thunkAPI) => {
	try {
		const userId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) ?? "");

		if (!userId) {
			throw thunkAPI.rejectWithValue("user id is not defined");
		}

		const response = await thunkAPI.dispatch(getUserDataByIdQuery(userId)).unwrap();

		if (!response.accountSettings) {
			throw thunkAPI.rejectWithValue("");
		}

		return response;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue("Something went wrong");
	}
});
