import { StateSchema, StoreProvider } from "app/providers/store";
import { articleReducer } from "entity/Article";
import { newCommentReducer } from "features/addNewComment";
import { articleDetailsCommentsReducer } from "features/articleCommentList";
import { loginReducer } from "features/authByUserName/model/slice/loginSlice";
import { profileReducer } from "features/editableProfileCard";
import { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";

const asyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	article: articleReducer,
	addNewComment: newCommentReducer,
	articleComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<StoreProvider initialState={state} asyncReducers={asyncReducers}>
				<Story />
			</StoreProvider>
		);
	};

	return inner;
};
