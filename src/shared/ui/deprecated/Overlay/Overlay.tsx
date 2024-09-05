import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Overlay = ({className, onClose, isOpen}: OverlayProps) => {
	return (
		<div className={classNames(cls.Overlay, {[cls.opened]: isOpen}, [className])} onClick={onClose} />
	);
};

export default Overlay;