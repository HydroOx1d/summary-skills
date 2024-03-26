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
import { useNavigate, useParams } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/className";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import Page from "widgets/Page/Page";
import cls from "./Article.module.scss";

const initialReducers: ReducersList = {
	articleComments: articleDetailsCommentsReducer,
	articleRecommendation: articleRecommendationReducer
};

const ArticleDetail = () => {
	const {articleId} = useParams<{articleId: string}>();
	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
	const thunkDispatch = useThunkDispatch();
	const navigate = useNavigate();

	const onBackToList = React.useCallback(() => {
		navigate(routePath.articles);
	}, [navigate]);

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
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{"<"} Back</Button>
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