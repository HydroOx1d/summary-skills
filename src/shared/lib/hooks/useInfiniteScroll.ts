import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollProps {
  wrapperRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
	const { targetRef, wrapperRef, callback } = props;

	useEffect(() => {
		const targetRefCurrent = targetRef.current;
		const wrapperRefCurrent = wrapperRef.current;
		let observer: IntersectionObserver;
		if (callback) {
			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						callback();
					}
				},
				{
					root: wrapperRefCurrent,
					rootMargin: "0px",
					threshold: 1.0,
				}
			);

			observer.observe(targetRefCurrent);
		}

		return () => {
			if (observer && !targetRefCurrent) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(targetRefCurrent);
			}
		};
	}, [callback, targetRef, wrapperRef]);
}
