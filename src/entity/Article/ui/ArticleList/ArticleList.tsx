import React from "react";
import cls from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/className";
import { Article, ArticleViewWay } from "../../model/types/article";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleListSkeleton from "./ArticleListSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleViewWay;
}

const ArticleList = (props: ArticleListProps) => {
	const { className, articles, view, isLoading } = props;

	const renderArticle = (article: Article) => {
		return <ArticleListItem article={article} view={view} key={article.id} />;
	};

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length ? articles.map(renderArticle) : null}
			{isLoading ? new Array(view === ArticleViewWay.CARDS ? 8 : 3).fill(0).map((_, i) => {
				return <ArticleListSkeleton view={view} key={i} />;
			}) : null}
		</div>
	);
};

export default React.memo(ArticleList);
