import React from "react";
import { CommentList, IComment } from "entity/Comment";
import { classNames } from "shared/lib/classNames/className";

interface ArticleCommentListProps {
	comments?: IComment[]
	isLoading: boolean
}

const ArticleCommentList = ({isLoading, comments}: ArticleCommentListProps) => {
	return (
		<div className={classNames("ArticleCommentList")}>
			<CommentList comments={comments} isLoading={isLoading} />
		</div>
	);
};

export default React.memo(ArticleCommentList);