
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./RatingCard.module.scss";
import Card from "@/shared/ui/Card/Card";
import Text from "@/shared/ui/Text/Text";
import StarRating from "@/shared/ui/StarRating/StarRating";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import Modal from "@/shared/ui/Modal/Modal";
import Input from "@/shared/ui/Input/Input";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import { useMediaQuery } from "react-responsive";
import Drawer from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
	title?: string;
	hasFeedback?: boolean;
	feedbackTitle?: string;
	rate?: number;
	onAccept?: (rating: number, feedback?: string) => void;
	onCancel?: (rating: number) => void;
}

const RatingCard = (props: RatingCardProps) => {
	const {
		className,
		feedbackTitle,
		hasFeedback,
		onAccept,
		onCancel,
		title,
		rate = 0
	} = props;

	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const [feedbackValue, setFeedbackValue] = React.useState("");
	const [ratingCount, setRatingcount] = React.useState(0);
	const isDesktop = useMediaQuery({minWidth: 767});
	const isMobile = useMediaQuery({maxWidth: 767});

	const onRatingSelect = React.useCallback((rating: number) => {		
		if (hasFeedback) {
			setModalIsOpen(true);
			setRatingcount(rating);
		} else {
			onAccept?.(rating);
		}
	}, [hasFeedback, onAccept]);

	const onAcceptHandle = React.useCallback(() => {
		setModalIsOpen(false);
		onAccept?.(ratingCount, feedbackValue);
	}, [feedbackValue, onAccept, ratingCount]);

	const onCancelHandle = React.useCallback(() => {
		setModalIsOpen(false);
		onCancel?.(ratingCount);
	}, [onCancel, ratingCount]);

	const modalContent = (
		<VStack gap="8">
			<Text title={feedbackTitle}/>
			<Input placeholder="Пишите здесь" value={feedbackValue} onChange={setFeedbackValue}/>
			<HStack gap="8" justify="flex-end">
				<Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelHandle}>Отменить</Button>
				<Button theme={ButtonTheme.OUTLINE} onClick={onAcceptHandle}>Отправить</Button>
			</HStack>
		</VStack>
	);

	return (
		<Card className={classNames(cls.RatingCard, {}, [className])}>
			<VStack gap="8" align="center" max>
				<Text title={ratingCount ? "Спасибо за оценку!" : title} />
				<StarRating size={40} onSelect={onRatingSelect} selectedRating={rate}/>
			</VStack>
			{isDesktop && (
				<Modal isOpen={modalIsOpen}>
					{modalContent}
				</Modal>
			)}
			{isMobile && (
				<Drawer isOpen={modalIsOpen} onClose={onCancelHandle}>
					{modalContent}
				</Drawer>
			)}
		</Card>
	);
};

export default RatingCard;
