import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";

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
		},
		initAuthData(state) {
			const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

			if (data) {
				state.authData = JSON.parse(data);
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
