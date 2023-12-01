import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Modal.module.scss";
import Portal from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
	lazy?: boolean;
}

const Modal = (props: React.PropsWithChildren<ModalProps> ) => {
	const {
		children,
		className,
		isOpen = false,
		onClose,
		lazy
	} = props;

	const {theme} = useTheme();
	const [isMounted, setIsMounted] = React.useState(false);

	const closeHandle = React.useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const onKeyDown = React.useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			closeHandle();
		}
	}, [closeHandle]);

	React.useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	React.useEffect(() => {
		if(isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	if(lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, {[cls.modalOpened]: isOpen}, [className, theme])}>
				<div className={cls.modalOverlay} onClick={closeHandle}>
					<div className={cls.modalContent} onClick={(e:React.MouseEvent) => e.stopPropagation()}>{children}</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;