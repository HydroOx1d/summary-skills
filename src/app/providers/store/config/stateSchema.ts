import { LoginSchema } from "features/authByUserName";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterSchema } from "entity/Counter";
import { UserSchema } from "entity/User";
import { ProfileSchema } from "entity/Profile";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entity/Article";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers 
  loginForm?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleDetailsSchema
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

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<RejectValueType> {
  rejectValue: RejectValueType;
  extra: ThunkExtraArg;
  state: StateSchema;
}