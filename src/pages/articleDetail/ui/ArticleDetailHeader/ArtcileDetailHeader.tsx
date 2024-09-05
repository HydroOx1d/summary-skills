import { getArticleCanEdit } from "@/entity/Article";
import { getArticlesRoute } from "@/shared/constants/router";
import Button, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cls from "./ArticleDetailHeader.module.scss";

const ArtcileDetailHeader = () => {
	const navigate = useNavigate();
	const canEdit = useSelector(getArticleCanEdit);

	const onBackToList = React.useCallback(() => {
		navigate(getArticlesRoute());
	}, [navigate]);

	return (
		<div className={cls.ArticleDetailHeader}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{"<"} Back</Button>
			{canEdit && (
				<Button theme={ButtonTheme.OUTLINE}>Edit</Button>
			)}
		</div>
	);
};

export default ArtcileDetailHeader;