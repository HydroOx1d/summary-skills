import React from "react";
import cls from "./CommentList.module.scss";
import { classNames } from "shared/lib/classNames/className";
import type { IComment } from "../../model/types/comment";
import CommentCard from "../CommentCard/CommentCard";
import Text from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface CommentListProps {
  comments?: IComment[];
  isLoading?: boolean
}

const CommentList = (props: CommentListProps) => {
	const {
		comments,
		isLoading
	} = props;

	if (isLoading) {
		return (
			<div className={classNames(cls.CommentList)}>
				{[...new Array(3)].map((_, i) => {
					return (
						<div key={i} className={cls.skeleton}>
							<div className={cls.header}>
								<Skeleton width={30} height={30} border={"50%"} />
								<Skeleton width={100} height={15} />
							</div>
							<Skeleton height={30} />
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div className={classNames(cls.CommentList)}>
			{comments?.length ? comments.map(comment => {
				return (
					<CommentCard comment={comment} key={comment.id}/>
				);
			}) : <Text text="Comments are not found"/>}
		</div>
	);
};

export default React.memo(CommentList);