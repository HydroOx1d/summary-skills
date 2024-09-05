import React from "react";
import cls from "./StarRating.module.scss";
import { classNames } from "@/shared/lib/classNames/className";
import Star from "@/shared/assets/icons/star-line.svg";
import StarFill from "@/shared/assets/icons/star-fill.svg";
import HStack from "../../Stack/HStack/HStack";

const ratings = [1,2,3,4,5];

interface StarRatingProps {
  className?: string;
  onSelect?: (rating: number) => void;
  selectedRating?: number;
	size?: number;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const StarRating = (props: StarRatingProps) => {
	const {
		className,
		onSelect,
		selectedRating = 0,
		size = 24
	} = props;

	const [hoveredRating, setHoveredRating] = React.useState(selectedRating);
	const [isSelected, setIsSelected] = React.useState(Boolean(selectedRating));

	React.useEffect(() => {
		setHoveredRating(selectedRating);
		setIsSelected(Boolean(selectedRating));
	}, [selectedRating]);

	const onHover = (rating: number) => {
		if (!isSelected) {
			setHoveredRating(rating);
		}
	};

	const onLeave = () => {
		if (!isSelected) {
			setHoveredRating(0);
		}
	};

	const onHandleSelect = (rating: number) => {
		if (!isSelected) {
			setIsSelected(true);
			onSelect?.(rating);
		}
	};


	return (
		<HStack className={classNames(cls.StarRating, {}, [className])}>
			{ratings.map((rating, i) => {
				if (rating <= hoveredRating) {
					return (
						<React.Fragment key={i}>
							<StarFill width={size} height={size} className={cls.star} onMouseEnter={() => onHover(rating)} onMouseLeave={() => onLeave()} onClick={() => onHandleSelect(rating)}/>
						</React.Fragment>
					);
				}
				return (
					<React.Fragment key={i}>
						<Star width={size} height={size} className={cls.star} onMouseEnter={() => onHover(rating)} onClick={() => onHandleSelect(rating)}/>
					</React.Fragment>
				);
			})}
		</HStack>
	);
};

export default StarRating;