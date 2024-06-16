import React from "react";
import { Provider } from "react-redux";
import type { StateSchema } from "@/app/providers/store/config/stateSchema";
import { setupStore } from "@/app/providers/store/config/store";
import type { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider = (props: React.PropsWithChildren<StoreProviderProps>) => {
	const {
		children,
		initialState,
		asyncReducers
	} = props;

	const store = setupStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
  
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default StoreProvider;