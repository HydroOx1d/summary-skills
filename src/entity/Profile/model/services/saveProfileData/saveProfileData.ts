import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { Profile } from "../../types/profileSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const saveProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/saveProfileData", async (_, thunkAPI) => {
	try {
		const formData = getProfileForm(thunkAPI.getState());

		const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);

		if (!response.data) {
			throw new Error("no user");
		}

		return response.data;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue("Something went wrong");
	}
});
