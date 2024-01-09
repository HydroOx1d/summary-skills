import React from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/className";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Button, { ButtonTheme, SizesButton } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { getNewCommentError, getNewCommentIsLoading, getNewCommentText } from "../../model/selectors/addNewCommentSelectors";
import { newCommentActions, newCommentReducer } from "../../model/slice/newCommentSlice";
import cls from "./AddNewCommentForm.module.scss";

const initialReducer: ReducersList = {
	addNewComment: newCommentReducer
};

interface AddNewCommentFormProps {
  className?: string;
	onSendComment: (value: string) => void;
}

const AddNewCommentForm = (props: AddNewCommentFormProps) => {
	const {
		className,
		onSendComment
	} = props;

	const dispatch = useAppDispatch();
	const text = useSelector(getNewCommentText);
	const error = useSelector(getNewCommentError);
	const isLoading = useSelector(getNewCommentIsLoading);

	const onAddCommentTextChange = React.useCallback((value: string) => {
		dispatch(newCommentActions.setText(value));
	}, [dispatch]);

	const onSendHandle = React.useCallback(() => {
		onSendComment(text);
		onAddCommentTextChange("");
	}, [onAddCommentTextChange, onSendComment, text]);

	return (
		<ReducerLoader reducers={initialReducer} removeAfterUnmount>
			<div className={classNames(cls.AddNewCommentForm, {}, [className])}>
				<Input
					placeholder="Type comment text..."
					className={cls.input}
					value={text}
					onChange={onAddCommentTextChange}
				/>
				<Button className={cls.btn} size={SizesButton.L} onClick={onSendHandle} theme={ButtonTheme.OUTLINE}>
          Send
				</Button>
			</div>
		</ReducerLoader>
	);
};

export default React.memo(AddNewCommentForm);