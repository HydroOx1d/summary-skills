import { ArticleList } from "entity/Article";
import { getArticles } from "../../model/slice/articlesSlice";
import React from "react";
import { useSelector } from "react-redux";
import { getArticlesIsLoading, getArticlesView } from "../../model/selectors/articlesSelectors";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import { fetchNextPageArticles } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

const ArticleInfiniteList = () => {
	const thunkDispatch = useThunkDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesIsLoading);
	const view = useSelector(getArticlesView);

	const onFetchNextPart = React.useCallback(() => {
		if (__PROJECT__ != "storybook") {
			thunkDispatch(fetchNextPageArticles());
		}
	}, [thunkDispatch]);

	return (
		<ArticleList articles={articles} view={view} isLoading={isLoading} onFetchNextPart={onFetchNextPart}/>
	);
};

export default ArticleInfiniteList;