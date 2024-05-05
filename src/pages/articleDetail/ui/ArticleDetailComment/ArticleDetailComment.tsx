import { AddNewCommentForm } from "features/addNewComment";
import { ArticleCommentList, fetchCommentsByArticleId, getArticleComments, getArticleDetailsCommentsIsLoading, sendNewCommentForArticle } from "features/articleCommentList";
import React from "react";
import { useSelector } from "react-redux";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import Text from "shared/ui/Text/Text";
import cls from "./ArticleDetailComment.module.scss";
import VStack from "shared/ui/Stack/VStack/VStack";

interface ArticleDetailCommentProps {
  articleId: string;
}

const ArticleDetailComment = ({articleId}: ArticleDetailCommentProps) => {
	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
	const thunkDispatch = useThunkDispatch();

	React.useEffect(() => {
		if (__PROJECT__ != "storybook") {
			if (articleId) {
				thunkDispatch(fetchCommentsByArticleId(articleId));
			}
		}
	}, [articleId, thunkDispatch]);

	const onSendComment = React.useCallback(
		(value: string) => {
			thunkDispatch(sendNewCommentForArticle(value));
		},
		[thunkDispatch]
	);
	return (
		<VStack>
			<Text title="Comments" className={cls.commentTitle} />
			<AddNewCommentForm
				className={cls.commentForm}
				onSendComment={onSendComment}
			/>
			<ArticleCommentList isLoading={isLoading} comments={comments} />
		</VStack>
	);
};

export default ArticleDetailComment;