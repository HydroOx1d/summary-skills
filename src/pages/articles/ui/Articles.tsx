import { ArticleList, ArticleViewWay } from "entity/Article";
import React from "react";
import { useSelector } from "react-redux";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import { getArticlesError, getArticlesHasMore, getArticlesIsLoading, getArticlesPageNum, getArticlesView } from "../model/selectors/articlesSelectors";
import { fetchArticles } from "../model/services/fetchArticles/fetchArticles";
import { articlesActions, articlesReducer, getArticles } from "../model/slice/articlesSlice";
import cls from "./Articles.module.scss";
import ViewListIcon from "shared/assets/icons/viewList.svg";
import ViewCardsIcon from "shared/assets/icons/viewCards.svg";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { classNames } from "shared/lib/classNames/className";
import Page from "widgets/Page/Page";
import { fetchNextPageArticles } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

const initialReducers: ReducersList = {
	articles: articlesReducer
};

const iconsConstant = [
	{
		Icon: ViewCardsIcon,
		view: ArticleViewWay.CARDS,
	},
	{
		Icon: ViewListIcon,
		view: ArticleViewWay.LIST,
	},
];

const Article = () => {
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesIsLoading);
	const error = useSelector(getArticlesError);
	const view = useSelector(getArticlesView);
	const thunkDispatch = useThunkDispatch();
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		thunkDispatch(fetchArticles({
			page: 1
		}));
	}, [thunkDispatch]);

	const onToggleViews = React.useCallback((view: ArticleViewWay) => {
		dispatch(articlesActions.setView(view));
	}, [dispatch]);

	const onFetchNextPart = React.useCallback(() => {
		thunkDispatch(fetchNextPageArticles());
	}, [thunkDispatch]);
	
	return (
		<ReducerLoader reducers={initialReducers}>
			<Page className={cls.ArticlesPage} onScrollEnd={onFetchNextPart}>
				<div className={cls.filter}>
					<div className={cls.icons}>
						{iconsConstant.map(icon => {
							return (
								<icon.Icon
									width={24}
									height={24}
									key={icon.view}
									onClick={onToggleViews.bind(null, icon.view)}
									className={classNames(cls.icon, {[cls.isActive]: view === icon.view})}
								/>
							);
						})}
					</div>
				</div>
				<ArticleList articles={articles} view={view} isLoading={isLoading} />
			</Page>
		</ReducerLoader>
	);
};

export default React.memo(Article);