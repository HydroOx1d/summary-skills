import { getArticleData } from "./model/selectors/articleDetails";
import { articleActions, articleReducer } from "./model/slice/articleSlice";
import type { Article, ArticleDetailsSchema } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import ArticleList from "./ui/ArticleList/ArticleList";
import { ArticleViewWay } from "./model/types/article";

export {
	Article,
	ArticleDetails, ArticleDetailsSchema, ArticleList, articleActions, articleReducer, getArticleData, ArticleViewWay
};
