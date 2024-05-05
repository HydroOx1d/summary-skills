import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { saveProfileData } from "../services/saveProfileData/saveProfileData";
import { ProfileSchema } from "../types/editableProfileCard";
import { Profile } from "entity/Profile";

const initialState: ProfileSchema = {
	readonly: true,
	data: undefined,
	form: undefined,
	error: undefined,
	isLoading: false
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly(state, action: PayloadAction<boolean>) {
			state.readonly = action.payload;
		},
		updateProfile(state, action: PayloadAction<Profile>) {
			state.form = {
				...state.form,
				...action.payload
			};
		},
		cancelEdit(state) {
			state.form = state.data;
			state.readonly = true;
			state.validateErrors = [];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.form = action.payload;
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

		builder.addCase(saveProfileData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.form = action.payload;
			state.isLoading = false;
			state.readonly = true;
		});
		builder.addCase(saveProfileData.pending, (state) => {
			state.validateErrors = undefined;
			state.isLoading = true;
		});
		builder.addCase(saveProfileData.rejected, (state, action) => {
			state.validateErrors = action.payload;
			state.isLoading = false;
		});
	},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
