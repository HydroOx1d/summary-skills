import { articleReducer } from "entity/Article/model/slice/articleSlice";
import React from "react";
import Markdown from "react-markdown";
import { useSelector } from "react-redux";
import CalendarIcon from "shared/assets/icons/calendar-2-line.svg";
import EyeIcon from "shared/assets/icons/eye-line.svg";
import CopyIcon from "shared/assets/icons/file-copy-line.svg";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";
import Avatar from "shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Text, { TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { getArticleData, getArticleError, getArticleIsLoading } from "../../model/selectors/articleDetails";
import { getArticleById } from "../../model/services/getArticleById/getArticleById";
import cls from "./ArticleDetails.module.scss";

const initialReducers: ReducersList = {
	article: articleReducer,
};

interface ArticleDetailsProps {
  id: string;
}

const ArticleDetails = ({id}: ArticleDetailsProps) => {
	const thunkDispatch = useThunkDispatch();
	const isLoading = useSelector(getArticleIsLoading);
	const error = useSelector(getArticleError);
	const article = useSelector(getArticleData);

	React.useEffect(() => {
		if(__PROJECT__ != "storybook") {
			thunkDispatch(getArticleById(id));
		}
	}, [id, thunkDispatch]);

	const onCopy = React.useCallback((text: string) => {
		navigator.clipboard.writeText(text);
	}, []);

	let content;

	if (isLoading) {
		content = (
			<div className={cls.ArticleDetails}>
				<Skeleton width={200} height={200} border={"50%"} />
				<Skeleton width={"70%"} height={32} />
				<Skeleton width={"50%"} height={32} />
				<Skeleton width={"100%"} height={300} />
				<Skeleton width={"100%"} height={300} />
			</div>
		);
	} else if (error) {
		content = (
			<div className={cls.ArticleDetails}>
				<Text title="Произошла ошибка" theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
			</div>
		);
	} else {
		content = (
			<div className={cls.ArticleDetails}>
				<Avatar size={200} src={article?.firstImage} className={cls.avatar} />
				<Text size={TextSize.L} title={article?.title} text={article?.subtitle} />
				<div className={cls.articleInfo}>
					<EyeIcon width={24} height={24} />
					<Text text={String(article?.views)} />
				</div>
				<div className={cls.articleInfo}>
					<CalendarIcon width={24} height={24} />
					<Text text={String(article?.createdAt)} />
				</div>
				<Markdown
					components={{
						code({children, className, ...rest}) {
							return (
								<div className={cls.code}>
									<Button
										theme={ButtonTheme.OUTLINE}
										className={cls.copy}
										onClick={onCopy.bind(null, children as string)}
									>
										<CopyIcon width={24} height={24} />
									</Button>
									<code {...rest} className={className}>
										{children}
									</code>
								</div>
							);
						},
						p({children, className, ...rest}) {
							return (
								<Text text={children as string} className={className} {...rest}/>
							);
						}
					}}
				>{article?.content}</Markdown>
			</div>
		);
	}

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			{content}
		</ReducerLoader>
	);
};

export default React.memo(ArticleDetails);