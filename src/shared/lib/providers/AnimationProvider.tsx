import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");


interface AnimationProviderProps {
  Spring?: SpringType;
  Gesture?: GestureType;
  isLoaded: boolean;
}

const AnimationContext = createContext<AnimationProviderProps>({
	isLoaded: false
});

export const useAnimation = () => {
	return useContext(AnimationContext) as Required<AnimationProviderProps>;
};

const getAsyncAnimationModules = () => {
	return Promise.all([
		import("@react-spring/web"),
		import("@use-gesture/react")
	]);
};

export const AnimationProvider = ({children}: PropsWithChildren) => {
	const SpringRef = useRef<SpringType>();
	const GestureRef = useRef<GestureType>();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getAsyncAnimationModules().then(([Spring, Gesture]) => {
			SpringRef.current = Spring;
			GestureRef.current = Gesture;
			setIsLoaded(true);
		});
	}, []);

	return (
		<AnimationContext.Provider value={{
			Spring: SpringRef.current,
			Gesture: GestureRef.current,
			isLoaded
		}}>
			{children}
		</AnimationContext.Provider>
	);
};