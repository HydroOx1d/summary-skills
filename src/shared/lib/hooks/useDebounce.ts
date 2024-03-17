/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useCallback, useRef } from "react";


export function useDebounce(callback: (...args: any[]) => void, delay: number) {
	const timer = useRef() as MutableRefObject<any>;

	return useCallback((...args: any[]) => {
		clearTimeout(timer.current);

		timer.current = setTimeout(callback.bind(null, ...args), delay);
	}, [callback, delay]);
}