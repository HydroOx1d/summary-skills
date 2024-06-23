import type { ArticleRating } from "@/entity/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface ArticleRatingArgs {
	rate: number;
	userId: string;
	articleId: string;
	feedback?: string;
}

type GetArticleRatingArgs = Pick<ArticleRatingArgs, "articleId" | "userId">

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<ArticleRating[], GetArticleRatingArgs>({
			query: (args) => ({
				url: "/articles-rating",
				params: args
			}),
		}),
		createArticleRaing: build.mutation<void, ArticleRatingArgs>({
			query: (args) => ({
				url: "/articles-rating",
				method: "POST",
				body: args
			})
		})
	}),
});

export const {useGetArticleRatingQuery, useCreateArticleRaingMutation} = articleRatingApi;