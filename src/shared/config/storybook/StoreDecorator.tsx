import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/store";
import { loginReducer } from "features/authByUserName/model/slice/loginSlice";

const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<StoreProvider initialState={state} asyncReducers={asyncReducers}>
				<Story />
			</StoreProvider>
		);
	};

	return inner;
};
