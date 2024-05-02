import { ArticleList, ArticleViewWay } from "entity/Article";
import React from "react";
import { useSelector } from "react-redux";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import Text from "shared/ui/Text/Text";
import { getArtcileRecommendationIsLoading } from "../../model/selectors/articleRecommendationSelectors";
import cls from "./ArtcileRecommendationList.module.scss";
import { fetchArticleRecommendation } from "../../model/services/fetchArticleRecommendation/fetchArticleRecommendation";
import { getArticleRecommendation } from "../../model/slice/articleRecommendation";

const ArtcileRecommendationList = () => {
	const isLoading = useSelector(getArtcileRecommendationIsLoading);
	const articles = useSelector(getArticleRecommendation.selectAll);
	const thunkDispatch = useThunkDispatch();

	React.useEffect(() => {
		thunkDispatch(fetchArticleRecommendation());
	}, [thunkDispatch]);

	return (
		<div className={cls.ArtcileRecommendationList}>
			<Text title="Recommendation articles" className={cls.title}/>
			<ArticleList isLoading={isLoading} view={ArticleViewWay.CARDS} articles={articles} className={cls.articles}/>
		</div>
	);
};

export default ArtcileRecommendationList;