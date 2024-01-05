import { ArticleDetailsCommentsSchema } from "./model/types/articleDetailsCommentsSchema";
import {articleDetailsCommentsActions, articleDetailsCommentsReducer} from "./model/slice/articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "./model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleDetailsCommentsIsLoading } from "./model/selectors/articleDetailsCommentsSelectors";

export {
	ArticleDetailsCommentsSchema,
	articleDetailsCommentsReducer,
	articleDetailsCommentsActions,
	fetchCommentsByArticleId,
	getArticleDetailsCommentsIsLoading
};