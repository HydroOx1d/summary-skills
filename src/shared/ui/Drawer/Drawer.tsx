import React from "react";
import cls from "./Drawer.module.scss";
import { classNames } from "shared/lib/classNames/className";
import Overlay from "../Overlay/Overlay";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void
}

const Drawer = (props: React.PropsWithChildren<DrawerProps>) => {
	const {
		className,
		isOpen,
		onClose,
		children
	} = props;

	const {theme} = useTheme();

	const onCloseHandle = React.useCallback(() => {
		onClose?.();
	}, [onClose]);

	return (
		<Portal>
			<div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [className, theme])}>
				<Overlay isOpen={isOpen} onClose={onCloseHandle}/>
				<div className={cls.content}>{children}</div>
			</div>
		</Portal>
	);
};

export default Drawer;