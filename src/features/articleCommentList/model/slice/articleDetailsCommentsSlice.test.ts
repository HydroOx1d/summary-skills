import { IComment } from "entity/Comment";
import { ArticleDetailsCommentsSchema } from "../types/articleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";


const data: IComment[] = [
	{
		id: 1,
		articleId: "1",
		content: "Comment",
	}
];

describe("article details comments slice test", () => {
	test("extra reducer (get article details comments data) - pending status", () => {
		const state: DeepPartial<ArticleDetailsCommentsSchema> = {
			isLoading: false,
			error: "error"
		};

		expect(
			articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending)
		).toEqual({
			isLoading: true,
			error: undefined
		});
	});

	test("extra reducer (get article details comments data) - fulfilled status", () => {
		const state: DeepPartial<ArticleDetailsCommentsSchema> = {
			isLoading: true,
			ids: [],
			entities: {}
		};

		expect(
			articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(data, "", "")
			)
		).toEqual({
			isLoading: false,
			ids: [1],
			entities: {
				1: {
					...data[0]
				}
			}
		});
	});
});
