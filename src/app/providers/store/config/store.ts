import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, StoreWithReducerManager } from "./stateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { scrollSaverReducer } from "features/scrollSaver";
import { rtkApi } from "shared/api/rtkApi";

export const setupStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		scrollSaver: scrollSaverReducer,
		[rtkApi.reducerPath]: rtkApi.reducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const store: StoreWithReducerManager = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}).concat(rtkApi.middleware),
	});

	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];