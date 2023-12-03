import { Reducer } from "@reduxjs/toolkit";
import { StoreWithReducerManager } from "app/providers/store";
import { StateSchemaKey } from "app/providers/store/config/stateSchema";
import React from "react";
import { useDispatch, useStore } from "react-redux";

type ReducersEntriesType = [StateSchemaKey, Reducer];

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

		Object.entries(reducers).forEach(([name, reducer]: ReducersEntriesType) => {
			if (!store.reducerManager.check(name)) {
				store.reducerManager.add(name, reducer);
				dispatch({ type: `@LOAD_REDUCER ${name} reducer is added` });
			}
		});
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name]: ReducersEntriesType) => {
						if (store.reducerManager.check(name)) {
							store.reducerManager.remove(name);
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
