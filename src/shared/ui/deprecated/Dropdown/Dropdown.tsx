import { Menu } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import { classNames } from "@/shared/lib/classNames/className";
import { Fragment, ReactNode } from "react";
import {AppLink} from "../AppLink/AppLink";
import { DropdownDirection } from "@/shared/types";

export type DropdownItem = {
  disabled?: boolean;
  content: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItem[];
	direction?: DropdownDirection; 
}

/**
 * @deprecated
 * Устаревший компонент
*/
function Dropdown(props: DropdownProps) {
	const {
		className,
		trigger,
		items,
		direction = "bottom left"
	} = props;

	const directionCls: Record<DropdownDirection, string> = {
		"bottom left": cls.bottom_left,
		"bottom right": cls.bottom_right,
		"top left": cls.top_left,
		"top right": cls.top_right,
	};

	return (
		<Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
			<Menu.Button className={cls.btn}>
				{trigger}
			</Menu.Button>
			<Menu.Items as="div" className={classNames(cls.items, {}, [directionCls[direction]])}>
				{items.map((item, i) => {
					const content = ({ active }: {active: boolean}) => (
						<button type="button" className={classNames(cls.item, {[cls.itemActive]: active}, [])} onClick={item.onClick} disabled={item.disabled}>
							{item.content}
						</button>
					);

					if (item.href) {
						return (
							<Menu.Item as={AppLink} to={item.href} key={i} disabled={item.disabled}>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item as={Fragment} key={i} disabled={item.disabled}>
							{content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
}

export default Dropdown;