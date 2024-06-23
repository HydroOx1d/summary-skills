import { Popover as HPopover } from "@headlessui/react";
import { PropsWithChildren, ReactNode } from "react";
import cls from "./Popover.module.scss";
import { classNames } from "@/shared/lib/classNames/className";
import { DropdownDirection } from "@/shared/types";

interface PopoverProps {
  trigger?: ReactNode;
  className?: string;
	direction?: DropdownDirection;
}

const Popover = (props: PropsWithChildren<PopoverProps>) => {
	const {
		className,
		trigger,
		children,
		direction = "bottom left"
	} = props;

	const directionCls: Record<DropdownDirection, string> = {
		"bottom left": cls.bottom_left,
		"bottom right": cls.bottom_right,
		"top left": cls.top_left,
		"top right": cls.top_right,
	};

	return (
		<HPopover className={classNames(cls.Popover, {}, [className])}>
			<HPopover.Button as="div" className={cls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel className={classNames(cls.panel, {}, [directionCls[direction]])}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
};

export default Popover;