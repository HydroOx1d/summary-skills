import { LOCAL_STORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initAuthData } from "../services/getUserDataById";
import { saveAccountSettings } from "../services/saveAccountSettings";
import type { User, UserSchema } from "../types/user";

const initialState: UserSchema = {
	authData: undefined
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<User>) {
			state.authData = action.payload;
			localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload.id));
			setFeatureFlags(action.payload.features);
			state._inited = true;
		},
		logout(state) {
			state.authData = undefined;
			localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(saveAccountSettings.fulfilled, (state, action) => {
				if (state.authData) {
					state.authData.accountSettings = action.payload;
				}
			})
			.addCase(initAuthData.fulfilled, (state, action) => {
				state.authData = action.payload;
				setFeatureFlags(action.payload.features);
				state._inited = true;
			})
			.addCase(initAuthData.rejected, (state) => {
				state._inited = true;
			});	
	}
});

export const { actions: userActions, reducer: userReducer } =
  userSlice;
