import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Profile, ValidateProfileError } from "../../types/profileSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const saveProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/saveProfileData", async (_, thunkAPI) => {
	try {
		const formData = getProfileForm(thunkAPI.getState());

		const errors = validateProfileData(formData);

		if (errors.length) {
			return thunkAPI.rejectWithValue(errors);
		}

		const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);

		if (!response.data) {
			throw new Error("no user");
		}

		return response.data;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
	}
});
