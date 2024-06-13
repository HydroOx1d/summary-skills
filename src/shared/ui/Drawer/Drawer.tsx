import React from "react";
import cls from "./Drawer.module.scss";
import { classNames } from "shared/lib/classNames/className";
import Overlay from "../Overlay/Overlay";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { useModal } from "shared/lib/hooks/useModal";

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
	const {closeHandle} = useModal({
		onClose,
		isOpen
	});

	return (
		<Portal>
			<div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [className, theme])}>
				<Overlay isOpen={isOpen} onClose={closeHandle}/>
				<div className={cls.content}>{children}</div>
			</div>
		</Portal>
	);
};

export default Drawer;