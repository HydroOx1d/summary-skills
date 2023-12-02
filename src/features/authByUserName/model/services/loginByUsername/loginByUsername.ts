import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "shared/config/langConfig/langConfig";
import { User, userActions } from "entity/User";

interface LoginData {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginData, {rejectValue: string}>("login/loginByUsername", async (loginData, thunkAPI) => {
	try {
		const response = await axios.post<User>("http://localhost:3001/login", loginData, {
			headers: {
				Authorization: "asdsadasdasd"
			}
		});

		if (!response.data) {
			throw new Error();
		}

		thunkAPI.dispatch(userActions.setAuthData(response.data));

		return response.data;
	} catch(e) {
		console.log(e);
		return thunkAPI.rejectWithValue(i18n.t("authError"));
	}
});