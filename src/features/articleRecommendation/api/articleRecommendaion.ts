import type { Article } from "entity/Article";
import { rtkApi } from "shared/api/rtkApi";

const articleRecommendationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationList: build.query<Article[], number>({
			query: (limit) => ({
				url: "/articles",
				params: {
					_limit: limit
				}
			}),
		}),
	}),
});

export const {useGetArticleRecommendationListQuery} = articleRecommendationApi;