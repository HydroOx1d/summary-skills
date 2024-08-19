import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserSchema } from "../types/user";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";

const initialState: UserSchema = {
	authData: undefined
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<User>) {
			state.authData = action.payload;
			localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload));
			setFeatureFlags(action.payload.features);
		},
		initAuthData(state) {
			const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

			if (data) {
				const json = JSON.parse(data) as User;
				state.authData = json;
				setFeatureFlags(json.features);
			}
		},
		logout(state) {
			state.authData = undefined;
			localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		}
	},
});

export const { actions: userActions, reducer: userReducer } =
  userSlice;
