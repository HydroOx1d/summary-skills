import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollProps {
  wrapperRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
	const { targetRef, wrapperRef, callback } = props;

	useEffect(() => {
		let observer: IntersectionObserver;
		if (callback) {
			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						callback();
					}
				},
				{
					root: wrapperRef.current,
					rootMargin: "0px",
					threshold: 1.0,
				}
			);

			observer.observe(targetRef.current);
		}

		return () => {
			if (observer) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(targetRef.current);
			}
		};
	}, [callback, targetRef, wrapperRef]);
}
