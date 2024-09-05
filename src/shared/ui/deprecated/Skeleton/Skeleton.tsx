import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  border?: number | string;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Skeleton = (props: SkeletonProps) => {
	const {
		className,
		border,
		height = 600,
		width = 400
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