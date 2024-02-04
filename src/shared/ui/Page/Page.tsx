import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Page.module.scss";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";


interface PageProps {
  className?: string;
	onScrollEnd?: () => void;
}

const Page = (props: React.PropsWithChildren<PageProps>) => {
	const { children, className, onScrollEnd } = props;

	const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
	const targetRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

	useInfiniteScroll({
		wrapperRef,
		targetRef,
		callback: onScrollEnd,
	});
  
	return (
		<div className={classNames(cls.Page, {}, [className])} ref={wrapperRef}>
			{children}
			<div ref={targetRef}/>
		</div>
	);
};

export default Page;