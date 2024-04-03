import { ArticleList } from "entity/Article";
import React from "react";
import { useSelector } from "react-redux";

import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Page from "widgets/Page/Page";
import { getArticlesIsLoading, getArticlesView } from "../../model/selectors/articlesSelectors";
import { fetchNextPageArticles } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initialFetchArticles } from "../../model/services/initialFetchArticles/initialFetchArticles";
import { articlesReducer, getArticles } from "../../model/slice/articlesSlice";
import ArticlesPageFilter from "../ArticlesPageFilters/ArticlesPageFilter";
import cls from "./Articles.module.scss";

const initialReducers: ReducersList = {
	articles: articlesReducer
};

const Article = () => {
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesIsLoading);
	const view = useSelector(getArticlesView);
	const thunkDispatch = useThunkDispatch();
	const pageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

	React.useEffect(() => {
		thunkDispatch(initialFetchArticles());
	}, [thunkDispatch]);

	const onFetchNextPart = React.useCallback(() => {
		thunkDispatch(fetchNextPageArticles());
	}, [thunkDispatch]);

	return (
		<ReducerLoader reducers={initialReducers}>
			<Page className={cls.ArticlesPage} pageRef={pageRef}>
				<ArticlesPageFilter />
				<ArticleList articles={articles} view={view} isLoading={isLoading} onFetchNextPart={onFetchNextPart} ref={pageRef}/>
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(Article);
