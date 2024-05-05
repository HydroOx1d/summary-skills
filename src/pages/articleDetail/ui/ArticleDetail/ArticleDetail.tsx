import { ArticleDetails } from "entity/Article";
import {
	articleDetailsCommentsReducer
} from "features/articleCommentList";
import { ArtcileRecommendationList } from "features/articleRecommendation";
import React from "react";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/className";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Page from "widgets/Page/Page";
import ArticleDetailComment from "../ArticleDetailComment/ArticleDetailComment";
import ArtcileDetailHeader from "../ArticleDetailHeader/ArtcileDetailHeader";
import cls from "./ArticleDetail.module.scss";

const initialReducers: ReducersList = {
	articleComments: articleDetailsCommentsReducer
};

const ArticleDetail = () => {
	const {articleId} = useParams<{articleId: string}>();

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
				<ArticleDetailComment articleId={articleId}/>
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(ArticleDetail);