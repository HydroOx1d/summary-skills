import { ArticleDetails } from "@/entity/Article";
import {
	articleDetailsCommentsReducer
} from "@/features/articleCommentList";
import { ArticleRating } from "@/features/articleRating";
import { ArtcileRecommendationList } from "@/features/articleRecommendation";
import { classNames } from "@/shared/lib/classNames/className";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import ReducerLoader, { ReducersList } from "@/shared/lib/reducerLoader/ReducerLoader";
import { Page } from "@/widgets/Page";
import React from "react";
import { useParams } from "react-router-dom";
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
			<Page data-testid="ArticleDetailPage" className={classNames(cls.ArticlePage)}>
        The article is not found
			</Page>
		);
	}

	const articleRating = toggleFeature({
		name: "isArticleRatingEnabled",
		on: () => <ArticleRating articleId={articleId} className={cls.articleRating}/>,
		off: () => "Article Rating will be available soon"
	});

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<Page data-testid="ArticleDetailPage" className={classNames(cls.ArticlePage)}>
				<ArtcileDetailHeader/>
				<ArticleDetails id={articleId} />
				<ArtcileRecommendationList/>
				<ToggleFeature 
					name="isArticleRatingEnabled"
					off={"Article Rating will be available soon"}
					on={<ArticleRating articleId={articleId} className={cls.articleRating}/>}
				/>
				<ArticleDetailComment articleId={articleId}/>
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(ArticleDetail);