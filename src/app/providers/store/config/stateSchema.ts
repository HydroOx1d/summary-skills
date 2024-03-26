import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entity/Article";
import { CounterSchema } from "entity/Counter";
import { ProfileSchema } from "entity/Profile";
import { UserSchema } from "entity/User";
import { NewCommentSchema } from "features/addNewComment";
import { ArticleDetailsCommentsSchema } from "features/articleCommentList";
import { ArticleRecommendationSchema } from "features/articleRecommendation";
import { LoginSchema } from "features/authByUserName";
import { ScrollSaverSchema } from "features/scrollSaver";
import { ArticlesSchema } from "pages/articles";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSaver: ScrollSaverSchema;

  // Async reducers 
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleDetailsSchema;
  articleRecommendation?: ArticleRecommendationSchema;
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