import type { StateSchema } from "app/providers/store";
import { getArticlesError, getArticlesIsLoading, getArticlesView } from "./articlesSelectors";
import { ArticleViewWay } from "entity/Article";

describe("article selectors test", () => {
	test("return articles loading status", () => {
		const state: DeepPartial<StateSchema> = {
			articles: {
				isLoading: true
			}
		};

		expect(getArticlesIsLoading(state as StateSchema)).toBe(true);
	});

	test("return articles error", () => {
		const state: DeepPartial<StateSchema> = {
			articles: {
				error: "error"
			},
		};

		expect(getArticlesError(state as StateSchema)).toBe("error");
	});

	test("return articles view", () => {
		const state: DeepPartial<StateSchema> = {
			articles: {
				view: "list" as ArticleViewWay
			},
		};

		expect(getArticlesView(state as StateSchema)).toBe("list");
	});
});