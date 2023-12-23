import React, { useMemo } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "shared/lib/classNames/className";

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

const Avatar = (props: AvatarProps) => {
	const {
		className,
		size,
		src,
		alt
	} = props;

	const style = useMemo<React.CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100
		};
	}, [size]);

	return (
		<img src={src} className={classNames(cls.Avatar, {}, [className])} style={style} alt={alt}/>
	);
};

export default Avatar;