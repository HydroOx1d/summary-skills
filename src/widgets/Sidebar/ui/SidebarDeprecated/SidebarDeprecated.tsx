import React from "react";
import cls from "./SidebarDeprecated.module.scss";
import Button, { ButtonTheme, SizesButton } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/className";
import { SidebarItemType } from "../../model/types/sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

interface SidebarDeprecatedProps {
  className?: string;
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void
  sidebarItems: SidebarItemType[]
}

const SidebarDeprecated = (props: SidebarDeprecatedProps) => {
	const {
		className,
		collapsed,
		setCollapsed,
		sidebarItems
	} = props;

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.SidebarDeprecated, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<div className={cls.links}>
				{sidebarItems.map((sidebarItem) => {
					return <SidebarItem item={sidebarItem} key={sidebarItem.path} />;
				})}
			</div>
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				data-testid="sidebar-collapse-btn"
				onClick={setCollapsed.bind(null, !collapsed)}
				className={cls.collapsedBtn}
				square
				size={SizesButton.L}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};

export default SidebarDeprecated;