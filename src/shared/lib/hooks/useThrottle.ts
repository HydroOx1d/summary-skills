/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";



export function useThrotle(callback: (...args: any[]) => void, delay: number = 500) {
	const throttleRef = useRef(true);

	return useCallback((...args: any[]) => {

		if (throttleRef.current) {
			callback(...args);

			throttleRef.current = false;

			setTimeout(() => throttleRef.current = true, delay);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}