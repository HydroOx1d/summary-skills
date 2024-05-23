import type { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import type { AxiosInstance } from "axios";
import type { ArticleDetailsSchema } from "entity/Article";
import type { UserSchema } from "entity/User";
import type { NewCommentSchema } from "features/addNewComment";
import type { ArticleDetailsCommentsSchema } from "features/articleCommentList";
import type { LoginSchema } from "features/authByUserName";
import type { ProfileSchema } from "features/editableProfileCard";
import type { ScrollSaverSchema } from "features/scrollSaver";
import type { ArticlesSchema } from "pages/articles";
import { rtkApi } from "shared/api/rtkApi";

export interface StateSchema {
  user: UserSchema;
  scrollSaver: ScrollSaverSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Async reducers 
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleDetailsSchema;
  articleComments?: ArticleDetailsCommentsSchema;
  addNewComment?: NewCommentSchema;
  articles?: ArticlesSchema;
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