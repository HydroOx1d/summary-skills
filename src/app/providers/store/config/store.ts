import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, StoreWithReducerManager } from "./stateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { createReducerManager } from "./reducerManager";

export const setupStore = (initialState?: StateSchema) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const store: StoreWithReducerManager = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	store.reducerManager = reducerManager;

	return store;
};