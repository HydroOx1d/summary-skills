import React from "react";
import EyeIcon from "shared/assets/icons/eye-line.svg";
import { classNames } from "shared/lib/classNames/className";
import Card from "shared/ui/Card/Card";
import Text, { TextSize } from "shared/ui/Text/Text";
import { Article, ArticleViewWay } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import Avatar from "shared/ui/Avatar/Avatar";
import Button from "shared/ui/Button/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewWay;
}

const ArticleListItem = (props: ArticleListItemProps) => {
	const {className, article, view} = props;
	const navigate = useNavigate();

	const views = (
		<div className={cls.views}>
			<Text text={String(article.views)} className={cls.views} />
			<EyeIcon width={20} height={20} />
		</div>
	);

	const types = <div className={cls.type}>{article.type.join(",")}</div>;

	const onNavigateToArticle = React.useCallback(() => {
		navigate(routePath.article_detail + article.id);
	}, [article.id, navigate]);
  

	if (view === ArticleViewWay.CARDS) {
		return (
			<div
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			>
				<Card className={cls.card} onClick={onNavigateToArticle}>
					<Text text={article.createdAt} className={cls.date} />
					<div className={cls.image}>
						<img src={article.firstImage} alt={article.title} />
					</div>
					<div className={cls.content}>
						<div className={cls.info}>
							{types}
							{views}
						</div>
						<Text text={article.title} className={cls.title} />
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
		>
			<Card className={cls.card}>
				<div className={cls.header}>
					<div className={cls.user}>
						{article.user.avatar && (
							<Avatar
								size={30}
								src={article.user.avatar}
								alt={article.user.username}
							/>
						)}
						<Text text={article.user.username} />
					</div>
					<Text text={article.createdAt} className={cls.date} />
				</div>
				<Text title={article.title} className={cls.title} size={TextSize.L} />
				{types}
				<div className={classNames(cls.image, {}, ["_ibg"])}>
					<img src={article.firstImage} alt={article.title} />
				</div>
				<Text text={article.preview} className={cls.preview} />
				<div className={cls.footer}>
					<Button
						className={cls.btn}
						theme={ButtonTheme.OUTLINE}
						onClick={onNavigateToArticle}
					>
            Read more...
					</Button>
					{views}
				</div>
			</Card>
		</div>
	);
};

export default React.memo(ArticleListItem);