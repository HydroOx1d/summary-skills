import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Modal.module.scss";
import Portal from "@/shared/ui/Portal/Portal";
import Overlay from "@/shared/ui/Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme";

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
	const {closeHandle, isMounted} = useModal({
		isOpen,
		onClose
	});

	if(lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, {[cls.modalOpened]: isOpen}, [className, theme])}>
				<Overlay isOpen={isOpen} onClose={closeHandle}/>
				<div className={cls.modalContent}>{children}</div>
			</div>
		</Portal>
	);
};

export default Modal;