import { Reducer } from "@reduxjs/toolkit";
import { StoreWithReducerManager } from "app/providers/store";
import { StateSchemaKey } from "app/providers/store/config/stateSchema";
import React from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface ReducerLoader {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const ReducerLoader = (props: React.PropsWithChildren<ReducerLoader>) => {
	const { children, reducers, removeAfterUnmount } = props;
	const store = useStore() as StoreWithReducerManager;
	const dispatch = useDispatch();

	React.useEffect(() => {

		Object.entries(reducers).forEach(([name, reducer]) => {
			if (!store.reducerManager?.check(name as StateSchemaKey)) {
				store.reducerManager?.add(name as StateSchemaKey, reducer);
				dispatch({ type: `@LOAD_REDUCER ${name} reducer is added` });
			}
		});
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name]) => {
						if (store.reducerManager?.check(name as StateSchemaKey)) {
							store.reducerManager?.remove(name as StateSchemaKey);
							dispatch({ type: `@LOAD_REDUCER ${name} reducer is removed` });
						}
					}
				);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return children;
};

export default ReducerLoader;
