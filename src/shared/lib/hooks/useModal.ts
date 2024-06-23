import React from "react";

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const useModal = ({isOpen, onClose}: UseModalProps) => {
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

	return {
		closeHandle,
		isMounted
	};
};