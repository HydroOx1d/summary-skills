import React from "react";
import cls from "./Card.module.scss";
import { classNames } from "@/shared/lib/classNames/className";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Card = (props: React.PropsWithChildren<CardProps>) => {
	const {className, children, ...otherProps} = props;

	return (
		<div className={classNames(cls.Card, {}, [className])} {...otherProps}>
			{children}
		</div>
	);
};

export default Card;