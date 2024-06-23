import { RatingCard } from "@/entity/Rating";
import { getUserAuthData, User } from "@/entity/User";
import React from "react";
import { useSelector } from "react-redux";
import { useCreateArticleRaingMutation, useGetArticleRatingQuery } from "../api/articleRatingApi";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
	const {
		className,
		articleId
	} = props;

	const authData = useSelector(getUserAuthData) as Required<User>;

	const {data: articleRating} = useGetArticleRatingQuery({
		articleId,
		userId: authData.id
	});
	const [createRating] = useCreateArticleRaingMutation();

	const onCreateRatingHandle = React.useCallback((rating: number, feedback?: string) => {
		createRating({
			articleId,
			userId: authData?.id,
			rate: rating,
			feedback
		});
	}, [articleId, authData?.id, createRating]);

	const onAcceptHandle = React.useCallback((rating: number, feedback?: string) => {
		onCreateRatingHandle(rating, feedback);
	}, [onCreateRatingHandle]);

	const onCancelHandle = React.useCallback((rating: number) => {
		onCreateRatingHandle(rating);
	}, [onCreateRatingHandle]);

	const rating = articleRating?.[0];

	return (
		<RatingCard
			onAccept={onAcceptHandle}
			onCancel={onCancelHandle}
			className={className}
			title="Понравилась статья?"
			hasFeedback
			feedbackTitle="Напишите ваше мнение о статье"
			rate={rating?.rate ?? 0}
		/>
	);
};

export default ArticleRating;
