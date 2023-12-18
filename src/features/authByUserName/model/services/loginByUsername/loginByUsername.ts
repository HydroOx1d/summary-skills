import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/langConfig/langConfig";
import { User, userActions } from "entity/User";
import { ThunkConfig } from "app/providers/store";

interface LoginData {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginData, ThunkConfig<string>>("login/loginByUsername", async (loginData, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.post<User>("/login", loginData);

		if (!response.data) {
			throw new Error("no user");
		}

		thunkAPI.dispatch(userActions.setAuthData(response.data));

		return response.data;
	} catch(e) {
		console.log(e);
		return thunkAPI.rejectWithValue(i18n.t("authError"));
	}
});