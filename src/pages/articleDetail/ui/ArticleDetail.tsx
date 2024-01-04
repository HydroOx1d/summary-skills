import { ArticleDetails } from "entity/Article";
import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
	const {articleId} = useParams<{articleId: string}>();

	if(!articleId) {
		return (
			<div>The article is not found</div>
		);
	}

	return (
		<ArticleDetails id={articleId}/>
	);
};

export default React.memo(ArticleDetail);