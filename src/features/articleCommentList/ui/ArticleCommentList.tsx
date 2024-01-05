import React from "react";
import cls from "./ArticleCommentList.module.scss";

const ArticleCommentList = () => {
	return (
		<div className={cls.ArticleCommentList}>ArticleCommentList</div>
	);
};

export default React.memo(ArticleCommentList);