import { CounterSchema } from "entity/Counter";
import { UserSchema } from "entity/User";
import { LoginSchema } from "features/authByUserName";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers 
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  check: (key: StateSchemaKey) => boolean;
}

export interface StoreWithReducerManager extends ToolkitStore<StateSchema> {
  reducerManager?: ReducerManager
}