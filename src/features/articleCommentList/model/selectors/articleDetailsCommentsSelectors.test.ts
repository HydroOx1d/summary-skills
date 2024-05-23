import type { StateSchema } from "app/providers/store";
import { getArticleDetailsCommentsIsLoading } from "./articleDetailsCommentsSelectors";

describe("article details comments selectors test", () => {
	test("shoud return loading status", () => {
		const state: DeepPartial<StateSchema> = {
			articleComments: {
				isLoading: true
			}
		};

		expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
	});
});