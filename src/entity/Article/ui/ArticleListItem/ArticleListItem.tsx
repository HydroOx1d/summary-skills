import React from "react";
import EyeIcon from "shared/assets/icons/eye-line.svg";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/className";
import AppLink from "shared/ui/AppLink/AppLink";
import Avatar from "shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Card from "shared/ui/Card/Card";
import Text, { TextSize } from "shared/ui/Text/Text";
import { ArticleViewWay } from "../../model/types/article";
import type { Article } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewWay;
}

const ArticleListItem = (props: ArticleListItemProps) => {
	const {className, article, view} = props;

	const views = (
		<div className={cls.views}>
			<Text text={String(article.views)} className={cls.views} />
			<EyeIcon width={20} height={20} />
		</div>
	);

	const types = <div className={cls.type}>{article.type.join(",")}</div>;

	if (view === ArticleViewWay.CARDS) {
		return (
			<AppLink to={routePath.article_detail + article.id}
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			>
				<Card className={cls.card}>
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
			</AppLink>
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
					<AppLink to={routePath.article_detail + article.id}>
						<Button
							className={cls.btn}
							theme={ButtonTheme.OUTLINE}
						>
            Read more...
						</Button>
					</AppLink>
					{views}
				</div>
			</Card>
		</div>
	);
};

export default React.memo(ArticleListItem);