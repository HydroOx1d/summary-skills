import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Flex.module.scss";

type FlexJustify = "flex-start" | "center" | "flex-end" | "between" | "around";
type FlexAlign = "flex-start" | "center" | "flex-end" | "stretch";
type FlexDirection = "row" | "column";
type FlexGap = "4" | "8" | "16" | "32"

const justifyClasses: Record<FlexJustify, string> = {
	"flex-start": cls.justifyStart,
	"flex-end": cls.justifyEnd,
	"between": cls.justifyBetween,
	"center": cls.justifyCenter,
	"around": cls.justifyAround
};

const alignClasses: Record<FlexAlign, string> = {
	"flex-start": cls.alignStart,
	"flex-end": cls.alignEnd,
	"center": cls.alignCenter,
	"stretch": cls.alignStretch
};

const directionClasses: Record<FlexDirection, string> = {
	"column": cls.directionColumn,
	"row": cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	32: cls.gap32,
};

export interface FlexProps {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
	max?: boolean;
}

const Flex = (props: React.PropsWithChildren<FlexProps>) => {
	const {
		children, 
		className,
		justify = "flex-start",
		align = "stretch",
		direction = "row",
		gap,
		max
	} = props;


	const additionalClasses = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap]
	];

	return (
		<div className={classNames(cls.Flex, {[cls["max"]]: max}, additionalClasses)}>{children}</div>
	);
};

export default Flex;