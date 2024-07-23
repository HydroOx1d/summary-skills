import React from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./ArticleDetailHeader.module.scss";
import { useSelector } from "react-redux";
import { getArticleCanEdit } from "@/entity/Article";
import { routePath } from "@/shared/constants/router";

const ArtcileDetailHeader = () => {
	const navigate = useNavigate();
	const canEdit = useSelector(getArticleCanEdit);

	const onBackToList = React.useCallback(() => {
		navigate(routePath.articles);
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