import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/store";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<StoreProvider initialState={state}>
				<Story />
			</StoreProvider>
		);
	};

	return inner;
};
