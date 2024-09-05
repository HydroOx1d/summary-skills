import { getProfleRoute } from "@/shared/constants/router";
import { classNames } from "@/shared/lib/classNames/className";
import {AppLink} from "@/shared/ui/deprecated/AppLink/AppLink";
import Avatar from "@/shared/ui/deprecated/Avatar/Avatar";
import Text from "@/shared/ui/deprecated/Text/Text";
import React from "react";
import type { IComment } from "../../model/types/comment";
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
			<AppLink to={getProfleRoute(comment?.user?.id)} className={cls.header}>
				{comment?.user?.avatar ? <Avatar size={30} src={comment?.user.avatar}/> : null}
				<Text text={comment?.user?.username}/>
			</AppLink>
			<Text text={comment?.content}/>
		</div>
	);
};

export default React.memo(CommentCard);