import type { ArticleDetailsSchema, Article } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { articleReducer, articleActions } from "./model/slice/articleSlice";

export {
	ArticleDetailsSchema,
	Article,
	ArticleDetails,
	articleReducer,
	articleActions,
};