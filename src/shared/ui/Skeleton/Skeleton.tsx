import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  border?: number | string;
}

const Skeleton = (props: SkeletonProps) => {
	const {
		className,
		border,
		height,
		width
	} = props;

	const styles: React.CSSProperties = {
		width,
		height,
		borderRadius: border
	};

	return (
		<div className={classNames(cls.Skeleton, {}, [className])} style={styles}/>
	);
};

export default React.memo(Skeleton);