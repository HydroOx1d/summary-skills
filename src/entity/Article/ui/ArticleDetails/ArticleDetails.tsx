import React from "react";
import cls from "./ArticleDetails.module.scss";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import { getArticleById } from "../../model/services/getArticleById/getArticleById";
import { useSelector } from "react-redux";
import { getArticleError, getArticleIsLoading } from "../../model/selectors/articleDetails";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  id: string;
}

const ArticleDetails = ({id}: ArticleDetailsProps) => {
	const thunkDispatch = useThunkDispatch();
	const isLoading = useSelector(getArticleIsLoading);
	const error = useSelector(getArticleError);

	React.useEffect(() => {
		thunkDispatch(getArticleById(id));
	}, [id, thunkDispatch]);

	if (!isLoading) {
		return (
			<div className={cls.ArticleDetails}>
				<Skeleton width={200} height={200} border={"50%"} />
				<Skeleton width={"70%"} height={32} />
				<Skeleton width={"50%"} height={32} />
				<Skeleton width={"100%"} height={300} />
				<Skeleton width={"100%"} height={300} />
			</div>
		);
	}

	if (error) {
		return (
			<div className={cls.ArticleDetails}>
				<Text title="Произошла ошибка" theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
			</div>
		);
	}

	return (
		<div className={cls.ArticleDetails}>Article Details</div>
	);
};

export default React.memo(ArticleDetails);