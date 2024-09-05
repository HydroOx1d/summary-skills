import EyeIcon from "@/shared/assets/icons/eye-line.svg";
import { getArticlesRoute } from "@/shared/constants/router";
import { classNames } from "@/shared/lib/classNames/className";
import {AppLink} from "@/shared/ui/deprecated/AppLink/AppLink";
import Avatar from "@/shared/ui/deprecated/Avatar/Avatar";
import Button, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import Card from "@/shared/ui/deprecated/Card/Card";
import Text, { TextSize } from "@/shared/ui/deprecated/Text/Text";
import React from "react";
import { ArticleViewWay } from "../../model/consts/consts";
import type { Article } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import AppImage from "@/shared/ui/deprecated/AppImage/AppImage";
import Skeleton from "@/shared/ui/deprecated/Skeleton/Skeleton";

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
			<AppLink to={getArticlesRoute(article.id)}
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			>
				<Card className={cls.card}>
					<Text text={article.createdAt} className={cls.date} />
					<div className={cls.image}>
						<AppImage 
							src={article.firstImage} 
							alt={article.title}
							fallback={
								<Skeleton width="100%" height="100%"/>
							}
						/>
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
					<AppImage 
						src={article.firstImage} 
						alt={article.title}
						fallback={
							<Skeleton width="100%" height="100%"/>
						}
					/>
				</div>
				<Text text={article.preview} className={cls.preview} />
				<div className={cls.footer}>
					<AppLink to={getArticlesRoute(article.id)}>
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