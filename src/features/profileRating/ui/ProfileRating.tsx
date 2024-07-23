import React from "react";
import { RatingCard } from "@/entity/Rating";
import { useSelector } from "react-redux";
import { getUserAuthData, User } from "@/entity/User";
import { useCreateProfileRaingMutation, useGetProfileRatingQuery } from "../api/profileRatingApi";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = (props: ProfileRatingProps) => {
	const {
		className,
		profileId
	} = props;

	const authData = useSelector(getUserAuthData) as Required<User>;

	const {data: profileRating, isLoading} = useGetProfileRatingQuery({
		profileId,
		userId: authData?.id
	}, {
		skip: profileId === authData.id 
	});

	const [createRating] = useCreateProfileRaingMutation();

	const onCreateRatingHandle = React.useCallback((rating: number, feedback?: string) => {
		createRating({
			profileId,
			userId: authData?.id,
			rate: rating,
			feedback
		});
	}, [authData?.id, createRating, profileId]);

	const onAcceptHandle = React.useCallback((rating: number, feedback?: string) => {
		onCreateRatingHandle(rating, feedback);
	}, [onCreateRatingHandle]);

	const onCancelHandle = React.useCallback((rating: number) => {
		onCreateRatingHandle(rating);
	}, [onCreateRatingHandle]);

	if (isLoading) {
		return <Skeleton width={"100%"} height={120}/>;
	}

	if (profileId === authData.id) {
		return null;
	}



	const rating = profileRating?.[0];

	return (
		<RatingCard
			onAccept={onAcceptHandle}
			onCancel={onCancelHandle}
			className={className}
			title="Как вам данный профиль?"
			rate={rating?.rate ?? 0}
			hasFeedback
			feedbackTitle="Ваше мнение о пользователе"
		/>
	);
};

export default ProfileRating;
