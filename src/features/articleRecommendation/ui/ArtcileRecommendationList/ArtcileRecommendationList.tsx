import { ArticleListItem, ArticleListSkeleton, ArticleViewWay } from "entity/Article";
import Text from "shared/ui/Text/Text";
import { useGetArticleRecommendationListQuery } from "../../api/articleRecommendaion";
import cls from "./ArtcileRecommendationList.module.scss";

const ArtcileRecommendationList = () => {
	const {data: articles, isLoading} = useGetArticleRecommendationListQuery(5);

	return (
		<div className={cls.ArtcileRecommendationList}>
			<Text title="Recommendation articles" className={cls.title}/>
			<div className={cls.articles}>
				{!isLoading ? articles?.map(article => (
					<ArticleListItem article={article} view={ArticleViewWay.CARDS} key={article.id} className={cls.article} />
				)) : (
					<>
						{new Array(5).fill(5).map((_, i) => {
							return (
								<ArticleListSkeleton view={ArticleViewWay.CARDS} key={i} className={cls.article}/>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default ArtcileRecommendationList;