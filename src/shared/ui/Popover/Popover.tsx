import { Popover as HPopover } from "@headlessui/react";
import { PropsWithChildren, ReactNode } from "react";
import cls from "./Popover.module.scss";
import { classNames } from "@/shared/lib/classNames/className";
import { DropdownDirection } from "@/shared/types";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";

type PopoverPanelVariant = "primary" | "clear"

interface PopoverProps {
  trigger?: ReactNode;
  className?: string;
	direction?: DropdownDirection;
	panelVariant?: PopoverPanelVariant
}

const Popover = (props: PropsWithChildren<PopoverProps>) => {
	const {
		className,
		trigger,
		children,
		direction = "bottom left",
		panelVariant = "primary"
	} = props;

	const directionCls: Record<DropdownDirection, string> = {
		"bottom left": cls.bottom_left,
		"bottom right": cls.bottom_right,
		"top left": cls.top_left,
		"top right": cls.top_right,
	};

	const panelClassname = toggleFeature({
		name: "isAppRedesigned",
		on: () => cls.panel,
		off: () => cls.panelDeprecated,
	});

	const popoverClassname = toggleFeature({
		name: "isAppRedesigned",
		on: () => cls.Popover,
		off: () => cls.PopoverDeprecated,
	});

	return (
		<HPopover className={classNames(popoverClassname, {}, [className])}>
			<HPopover.Button as="div" className={cls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel className={classNames(panelClassname, {}, [directionCls[direction], cls[panelVariant]])}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
};

export default Popover;