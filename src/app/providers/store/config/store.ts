import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, StoreWithReducerManager } from "./stateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";

export const setupStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const store: StoreWithReducerManager = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api
				}
			}
		})
	});

	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];