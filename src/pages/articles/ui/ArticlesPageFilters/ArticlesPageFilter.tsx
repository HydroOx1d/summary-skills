import { ArticleSort, ArticleSortField, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewWay } from "@/entity/Article";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import { SortOrder } from "@/shared/types";
import Input from "@/shared/ui/Fields/Input/Input";
import {
	getArticlesOrder,
	getArticlesSearch,
	getArticlesSort,
	getArticlesType,
	getArticlesView
} from "../../model/selectors/articlesSelectors";
import { fetchArticles } from "../../model/services/fetchArticles/fetchArticles";
import {
	articlesActions
} from "../../model/slice/articlesSlice";
import cls from "./ArticlesPageFilter.module.scss";


const ArticlesPageFilter = () => {
	const dispatch = useAppDispatch();
	const thunkDispatch = useThunkDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const view = useSelector(getArticlesView);
	const type = useSelector(getArticlesType);
	const sortField = useSelector(getArticlesSort);
	const order = useSelector(getArticlesOrder);
	const search = useSelector(getArticlesSearch);

	const fetchFilterArticles = React.useCallback(() => {
		thunkDispatch(fetchArticles({
			replace: true
		}));
	}, [thunkDispatch]);

	const debouncedFetchFilterArticles = useDebounce(fetchFilterArticles, 500);
	
	const onToggleViews = React.useCallback(
		(view: ArticleViewWay) => {
			dispatch(articlesActions.setView(view));
		},
		[dispatch]
	);

	const onChangeSort = React.useCallback((value: ArticleSortField) => {
		dispatch(articlesActions.setSort(value));
		dispatch(articlesActions.setPage(1));
		fetchFilterArticles();
		setSearchParams((prev) => {
			return {
				...Object.fromEntries(prev.entries()),
				sort: value
			};
		});
	}, [dispatch, fetchFilterArticles, setSearchParams]);

	const onChangeOrder = React.useCallback((value: SortOrder) => {
		dispatch(articlesActions.setOrder(value));
		dispatch(articlesActions.setPage(1));
		fetchFilterArticles();
		setSearchParams((prev) => {
			return {
				...Object.fromEntries(prev.entries()),
				order: value
			};
		});
	}, [dispatch, fetchFilterArticles, setSearchParams]);

	const onChangeSearch = React.useCallback((value: string) => {
		dispatch(articlesActions.setSearch(value));
		dispatch(articlesActions.setPage(1));
		debouncedFetchFilterArticles();
		setSearchParams((prev) => {
			return {
				...Object.fromEntries(prev.entries()),
				search: value
			};
		});
	}, [dispatch, debouncedFetchFilterArticles, setSearchParams]);

	const onChangeType = React.useCallback((value: ArticleType) => {
		dispatch(articlesActions.setType(value));
		dispatch(articlesActions.setPage(1));
		debouncedFetchFilterArticles();
		setSearchParams((prev) => {
			return {
				...Object.fromEntries(prev.entries()),
				type: value
			};
		});
	}, [dispatch, debouncedFetchFilterArticles, setSearchParams]);

	return (
		<div className={cls.ArticlesPageFilter}>
			<div className={cls.sorting}>
				<ArticleSort sort={sortField} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}/>
				<ArticleView view={view} onToggleViews={onToggleViews} />
			</div>
			<Input value={search} onChange={onChangeSearch} className={cls.search} placeholder="Поиск"/>
			<ArticleTypeTabs type={type} onArticleTypeTabChange={onChangeType}/>
		</div>
	);
};

export default ArticlesPageFilter;
