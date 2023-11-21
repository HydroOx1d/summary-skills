import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { counterReducer } from "../../../../entities/Counter";

const reducers = combineReducers({
	counter: counterReducer
});

export const setupStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: reducers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
};