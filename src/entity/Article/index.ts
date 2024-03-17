import { getArticleData } from "./model/selectors/articleDetails";
import { articleActions, articleReducer } from "./model/slice/articleSlice";
import type { Article, ArticleDetailsSchema } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import ArticleList from "./ui/ArticleList/ArticleList";
import { ArticleViewWay } from "./model/types/article";
import ArticleView from "./ui/ArticleView/ArticleView";
import ArticleSort from "./ui/ArticleSort/ArticleSort";
import { ArticleSortField } from "./model/types/article";
import { ArticleType } from "./model/types/article";
import ArticleTypeTabs from "./ui/ArticleType/ArticleTypeTabs";

export {
	Article,
	ArticleDetails, ArticleDetailsSchema, ArticleList, articleActions, articleReducer, getArticleData, ArticleViewWay,
	ArticleView,
	ArticleSort,
	ArticleSortField,
	ArticleType,
	ArticleTypeTabs
};
