import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "@/app/providers/store";
import { AccountSettings } from "../types/accountSettings";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { getAccountSettings } from "../selectors/accountSettings";
import { changeAccountSettingsMutation } from "../../api/userApi";

export const saveAccountSettings = createAsyncThunk<AccountSettings, AccountSettings, ThunkConfig<string>>("user/saveAccountSettings", async (newAccountSettings, thunkAPI) => {
	try {
		const user = getUserAuthData(thunkAPI.getState());
		const oldAccountSettings = getAccountSettings(thunkAPI.getState());

		if (!user) {
			throw thunkAPI.rejectWithValue("user is not defined");
		}

		const response = await thunkAPI.dispatch(changeAccountSettingsMutation({
			userId: user.id,
			accountSettings: {
				...oldAccountSettings,
				...newAccountSettings
			}
		})).unwrap();

		if (!response.accountSettings) {
			throw thunkAPI.rejectWithValue("");
		}

		return response.accountSettings;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue("Something went wrong");
	}
});
