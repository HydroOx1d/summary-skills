import type { ArticleDetailsSchema, Article } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { articleReducer, articleActions } from "./model/slice/articleSlice";
import { getArticleData } from "./model/selectors/articleDetails";

export {
	ArticleDetailsSchema,
	Article,
	ArticleDetails,
	articleReducer,
	articleActions,
	getArticleData
};