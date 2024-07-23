import React, { useImperativeHandle } from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Page.module.scss";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { scrollSaverActions } from "@/features/scrollSaver";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getScrollSaverByPath } from "@/features/scrollSaver";
import type { StateSchema } from "@/app/providers/store";
import { useThrotle } from "@/shared/lib/hooks/useThrottle";

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page = (props: React.PropsWithChildren<PageProps>, ref: React.ForwardedRef<HTMLElement>) => {
	const { children, className, onScrollEnd} = props;
	const dispatch = useAppDispatch();
	const {pathname} = useLocation();
	const position = useSelector((state: StateSchema) => getScrollSaverByPath(state, pathname));

	const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
	const targetRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

	useImperativeHandle(ref, () => {
		return wrapperRef.current;
	});

	useInfiniteScroll({
		wrapperRef,
		targetRef,
		callback: onScrollEnd,
	});

	React.useEffect(() => {
		if(position) {
			wrapperRef.current.scrollTo({
				top: position
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onScroll = useThrotle((e: React.UIEvent<HTMLDivElement>) => {
		dispatch(
			scrollSaverActions.setScrollPostition({
				path: pathname,
				position: e.currentTarget.scrollTop,
			})
		);
	});

	return (
		<div
			className={classNames(cls.Page, {}, [className])}
			ref={wrapperRef}
			onScroll={onScroll}
		>
			{children}
			<div ref={targetRef} />
		</div>
	);
};

export default React.forwardRef(Page);
