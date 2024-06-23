import { ArticleAsyncComponent as ArticlePage } from "./ui/ArticlesPage/Articles.async";
import { articlesReducer, articlesActions } from "./model/slice/articlesSlice";
import type { ArticlesSchema } from "./model/types/articles";

export {
	ArticlePage,
	articlesActions,
	articlesReducer,
	
};

export type {ArticlesSchema};