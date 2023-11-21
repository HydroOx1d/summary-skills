import React from "react";
import { Provider } from "react-redux";
import { StateSchema } from "app/providers/store/config/stateSchema";
import { setupStore } from "app/providers/store/config/store";
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = (props: React.PropsWithChildren<StoreProviderProps>) => {
	const {
		children,
		initialState
	} = props;

	const store = setupStore(initialState as StateSchema);
  
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default StoreProvider;