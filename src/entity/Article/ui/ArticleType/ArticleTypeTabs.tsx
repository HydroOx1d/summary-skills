import Tabs, { TabType } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/types/article";
import React from "react";
import cls from "./ArticleTypeTabs.module.scss";

interface ArticleTypeTabsProps {
  type: ArticleType;
  onArticleTypeTabChange: (newType: ArticleType) => void;
}

const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
	const {
		type,
		onArticleTypeTabChange
	} = props;

	const articleTabs = React.useMemo<TabType<ArticleType>[]>(() => [
		{
			value: ArticleType.ALL,
			content: "Все"
		},
		{
			value: ArticleType.IT,
			content: "IT"
		},
		{
			value: ArticleType.ECONOMICS,
			content: "Economics"
		}
	], []);

	return (
		<Tabs
			className={cls.ArticleTypeTabs}
			tabs={articleTabs}
			value={type}
			onTabChange={onArticleTypeTabChange}
		/>
	);
};

export default ArticleTypeTabs;