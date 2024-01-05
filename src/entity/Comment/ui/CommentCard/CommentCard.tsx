import React from "react";
import { classNames } from "shared/lib/classNames/className";
import Avatar from "shared/ui/Avatar/Avatar";
import Text from "shared/ui/Text/Text";
import { IComment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentProps {
  className?: string;
  comment?: IComment;
}

const CommentCard = (props: CommentProps) => {
	const {
		className,
		comment
	} = props;

	return (
		<div className={classNames(cls.Comment, {}, [className])}>
			<div className={cls.header}>
				{comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar}/> : null}
				<Text text={comment?.user.username}/>
			</div>
			<Text text={comment?.content}/>
		</div>
	);
};

export default React.memo(CommentCard);