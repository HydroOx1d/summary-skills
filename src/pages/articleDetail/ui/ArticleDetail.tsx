import { ArticleDetails, articleReducer } from "entity/Article";
import React from "react";
import { useParams } from "react-router-dom";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";

const initialReducers: ReducersList = {
	article: articleReducer
};

const ArticleDetail = () => {
	const {articleId} = useParams<{articleId: string}>();

	if(!articleId) {
		return (
			<div>The article is not found</div>
		);
	}

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<ArticleDetails id={articleId}/>
		</ReducerLoader>
	);
};

export default React.memo(ArticleDetail);