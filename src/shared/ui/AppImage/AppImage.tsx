import { ImgHTMLAttributes, ReactNode, useLayoutEffect, useState } from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}
const AppImage = (props: AppImageProps) => {
	const {className, alt = "image", src, fallback, errorFallback} = props;
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? "";

		img.onload = () => {
			setIsLoading(false);
		};

		img.onerror = () => {
			setHasError(true);
			setIsLoading(false);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && errorFallback) {
		return errorFallback;
	}

	return (<img className={className} src={src} alt={alt}/>);
};

export default AppImage;