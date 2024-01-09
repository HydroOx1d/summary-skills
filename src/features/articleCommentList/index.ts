import { getArticleDetailsCommentsIsLoading } from "./model/selectors/articleDetailsCommentsSelectors";
import { fetchCommentsByArticleId } from "./model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
	articleDetailsCommentsActions,
	articleDetailsCommentsReducer,
	getArticleComments,
} from "./model/slice/articleDetailsCommentsSlice";
import { ArticleDetailsCommentsSchema } from "./model/types/articleDetailsCommentsSchema";
import ArticleCommentList from "./ui/ArticleCommentList";
import { sendNewCommentForArticle } from "./model/services/sendNewCommentForArticle/sendNewCommentForArticle";

export {
	ArticleCommentList,
	ArticleDetailsCommentsSchema,
	articleDetailsCommentsActions,
	articleDetailsCommentsReducer,
	fetchCommentsByArticleId,
	getArticleComments,
	getArticleDetailsCommentsIsLoading,
	sendNewCommentForArticle
};
