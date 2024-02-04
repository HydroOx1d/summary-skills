import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextPageArticles } from "./fetchNextArticlesPage";
import { articlesActions } from "../../slice/articlesSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("testing fetch next articles page feature", () => {
	test("should resolve", async () => {
		const action = new TestAsyncThunk(fetchNextPageArticles, {
			articles: {
				entities: {},
				ids: [],
				isLoading: false,
				hasMore: true,
				page: 1,
				limit: 5
			}
		});

		await action.thunkCall();

		expect(action.getState).toHaveBeenCalledTimes(3);
		expect(action.dispatch).toHaveBeenCalledWith(articlesActions.setPage(2));
		expect(action.dispatch).toHaveBeenCalledWith(fetchArticles({
			page: 2
		}));
		expect(action.dispatch).toHaveBeenCalledTimes(4);
	});

	test("should not passing when hasmore flag is false", async () => {
		const action = new TestAsyncThunk(fetchNextPageArticles, {
			articles: {
				entities: {},
				ids: [],
				isLoading: false,
				hasMore: false,
				page: 1,
				limit: 5,
			},
		});

		await action.thunkCall();

		expect(action.getState).toHaveBeenCalledTimes(3);
		expect(action.dispatch).not.toHaveBeenCalledWith(
			articlesActions.setPage(2)
		);
		expect(action.dispatch).not.toHaveBeenCalledWith(
			fetchArticles({
				page: 2,
			})
		);
		expect(action.dispatch).toHaveBeenCalledTimes(2);
	});

	test("should not passing when isloading flag is true", async () => {
		const action = new TestAsyncThunk(fetchNextPageArticles, {
			articles: {
				entities: {},
				ids: [],
				isLoading: true,
				hasMore: true,
				page: 1,
				limit: 5,
			},
		});

		await action.thunkCall();

		expect(action.getState).toHaveBeenCalledTimes(3);
		expect(action.dispatch).not.toHaveBeenCalledWith(
			articlesActions.setPage(2)
		);
		expect(action.dispatch).not.toHaveBeenCalledWith(
			fetchArticles({
				page: 2,
			})
		);
		expect(action.dispatch).toHaveBeenCalledTimes(2);
	});
});
