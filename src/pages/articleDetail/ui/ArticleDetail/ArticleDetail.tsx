import { ArticleDetails } from "entity/Article";
import { AddNewCommentForm } from "features/addNewComment";
import {
	ArticleCommentList,
	articleDetailsCommentsReducer,
	fetchCommentsByArticleId,
	getArticleComments,
	getArticleDetailsCommentsIsLoading,
	sendNewCommentForArticle,
} from "features/articleCommentList";
import { ArtcileRecommendationList, articleRecommendationReducer } from "features/articleRecommendation";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/className";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Text from "shared/ui/Text/Text";
import Page from "widgets/Page/Page";
import cls from "./ArticleDetail.module.scss";
import ArtcileDetailHeader from "../ArticleDetailHeader/ArtcileDetailHeader";

const initialReducers: ReducersList = {
	articleComments: articleDetailsCommentsReducer,
	articleRecommendation: articleRecommendationReducer
};

const ArticleDetail = () => {
	const {articleId} = useParams<{articleId: string}>();
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

	if(!articleId) {
		return (
			<Page className={classNames(cls.ArticlePage)}>
        The article is not found
			</Page>
		);
	}

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<Page className={classNames(cls.ArticlePage)}>
				<ArtcileDetailHeader/>
				<ArticleDetails id={articleId} />
				<ArtcileRecommendationList/>
				<Text title="Comments" className={cls.commentTitle} />
				<AddNewCommentForm
					className={cls.commentForm}
					onSendComment={onSendComment}
				/>
				<ArticleCommentList isLoading={isLoading} comments={comments} />
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(ArticleDetail);