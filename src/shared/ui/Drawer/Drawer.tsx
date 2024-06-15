import React from "react";
import cls from "./Drawer.module.scss";
import { classNames } from "shared/lib/classNames/className";
import Overlay from "../Overlay/Overlay";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { useModal } from "shared/lib/hooks/useModal";
import { AnimationProvider, useAnimation } from "shared/lib/providers/AnimationProvider";

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
	lazy?: boolean;
}

const height = window.innerHeight;

const DrawerContent = (props: React.PropsWithChildren<DrawerProps>) => {
	const {
		className,
		isOpen,
		onClose,
		children,
		lazy
	} = props;
	const {Gesture, Spring} = useAnimation();
	console.log(Gesture, Spring);

	const {theme} = useTheme();
	const {closeHandle, isMounted} = useModal({
		onClose,
		isOpen
	});
	const [allowScroll, setAllowScroll] = React.useState(false);

	const [{y}, api] = Spring.useSpring(() => ({
		y: height
	}));

	const onDrawerOpen = React.useCallback(() => {
		api.start({
			y: 0
		});
	}, [api]);

	const onDrawerClose = React.useCallback(() => {
		api.start({
			y: height,
			immediate: false,
			onResolve: closeHandle
		});
	}, [api, closeHandle]);

	const bind = Gesture.useDrag(({last, offset: [, oy]}) => {
		if (oy < 0) {
			setAllowScroll(true);
		} else {
			setAllowScroll(false);
		}
		
		if (last) {
			oy > height / 4 ? onDrawerClose() : onDrawerOpen();
		} else {
			api.start({
				y: oy
			});
		}
	}, {
		bounds: {top: -1},
		from: () => [0, y.get()],
		axis: "y"
	});


	React.useEffect(() => {
		if (isOpen) {
			onDrawerOpen();
		} else {
			onDrawerClose();
		}
	}, [isOpen, onDrawerClose, onDrawerOpen]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [className, theme])}>
				<Overlay isOpen={isOpen} onClose={closeHandle}/>
				<Spring.a.div className={cls.content} style={{y, touchAction: allowScroll ? "pan-y" : "none"}} {...bind()}>{children}</Spring.a.div>
			</div>
		</Portal>
	);
};

const DrawerAsync = (props: React.PropsWithChildren<DrawerProps>) => {
	const {isLoaded} = useAnimation();

	console.log(isLoaded);

	if (!isLoaded) return null; 

	return <DrawerContent {...props} />;
};

const Drawer = (props: React.PropsWithChildren<DrawerProps>) => {

	return <AnimationProvider><DrawerAsync {...props} /></AnimationProvider>;
};

export default Drawer;