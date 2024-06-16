import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/store";
import { Profile } from "@/entity/Profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get<Profile>("/profile/" + profileId);

		if (!response.data) {
			throw new Error("no user");
		}

		return response.data;
	} catch (e) {
		console.log(e);
		throw thunkAPI.rejectWithValue("Something went wrong");
	}
});
