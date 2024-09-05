import React from "react";
import { Virtuoso, VirtuosoGrid } from "react-virtuoso";
import { classNames } from "@/shared/lib/classNames/className";
import Text from "@/shared/ui/deprecated/Text/Text";
import { ArticleViewWay } from "../../model/consts/consts";
import type {Article} from "../../model/types/article";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";
import ArticleListSkeleton from "./ArticleListSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleViewWay;
	onFetchNextPart?: () => void;
}

// TODO: implement ref to parent element to get its scroll

const ArticleList = (props: ArticleListProps) => {
	const { className, articles, view, isLoading, onFetchNextPart } = props;

	if (!isLoading && !articles.length) {
		return (
			<Text text="Статьи не найдены"/>
		);
	}

	const renderArticle = (_: unknown, article: Article) => {
		return <ArticleListItem article={article} view={view} key={article.id}/>;
	};

	if (view === ArticleViewWay.CARDS) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<VirtuosoGrid
					height={"100%"}
					data={articles}
					totalCount={articles.length}
					itemContent={renderArticle}
					endReached={onFetchNextPart}
					components={{
						// eslint-disable-next-line react/prop-types
						List: React.forwardRef(function ArticlesGridList({style , children, ...props}, ref) {
							return (
								<div 
									ref={ref}
									style={{
										...style,
										display: "grid",
										gridTemplateColumns: "repeat(4, 1fr)",
										rowGap: "30px",
										columnGap: "20px"
									}}
									{...props}
								>{children}</div>
							);
						}),
						Footer: () => {
							return (
								<div style={{
									display: "grid",
									gridTemplateColumns: "repeat(4, 1fr)",
									rowGap: "30px",
									columnGap: "20px"
								}}>
									{isLoading ? new Array(8).fill(0).map((_, i) => {
										return <ArticleListSkeleton view={view} key={i} />;
									}) : null}
								</div>
							);
						}
					}}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			<Virtuoso
				data={articles}
				totalCount={articles.length}
				itemContent={renderArticle}
				endReached={onFetchNextPart}
				components={{
					Item: (props) => {
						return (
							<div className={cls.articleWrapper} {...props}/>
						);
					},

					Footer: () => {
						return (
							<>
								{isLoading ? new Array(3).fill(0).map((_, i) => {
									return <ArticleListSkeleton view={view} key={i} />;
								}) : null}
							</>
						);
					}
				}}
			/>
		</div>
	);
};

export default React.memo(ArticleList);
