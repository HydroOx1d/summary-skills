import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, StoreWithReducerManager } from "./stateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { scrollSaverReducer } from "features/scrollSaver";

export const setupStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		scrollSaver: scrollSaverReducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const store: StoreWithReducerManager = configureStore({
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}),
	});

	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];