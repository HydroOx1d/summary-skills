import React from "react";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "@/shared/lib/reducerLoader/ReducerLoader";
import {Page} from "@/widgets/Page";
import { initialFetchArticles } from "../../model/services/initialFetchArticles/initialFetchArticles";
import { articlesReducer } from "../../model/slice/articlesSlice";
import ArticleInfiniteList from "../ArticleInfiniteList/ArticleInfiniteList";
import ArticlesPageFilter from "../ArticlesPageFilters/ArticlesPageFilter";
import cls from "./Articles.module.scss";
import { ArticlePageGreeter } from "@/features/articlePageGreeter";

const initialReducers: ReducersList = {
	articles: articlesReducer
};

const Article = () => {
	const thunkDispatch = useThunkDispatch();

	React.useEffect(() => {
		if (__PROJECT__ != "storybook") {
			thunkDispatch(initialFetchArticles());
		}
	}, [thunkDispatch]);

	return (
		<ReducerLoader reducers={initialReducers}>
			<Page data-testid="ArticlesPage" className={cls.ArticlesPage}>
				<ArticlesPageFilter />
				<ArticleInfiniteList />
				<ArticlePageGreeter/>
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(Article);
