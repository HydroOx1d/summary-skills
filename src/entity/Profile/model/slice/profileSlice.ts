import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profileSchema";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
	data: undefined,
	error: undefined,
	isLoading: false
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		});
	},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
