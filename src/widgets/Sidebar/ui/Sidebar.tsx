import React from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/className";
import Button, { ButtonTheme, SizesButton } from "@/shared/ui/Button/Button";
import {LangSwitcher} from "@/features/LangSwitcher";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import { getSidebarItems } from "../selectors/getSidebarItems";
import cls from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";

interface SiderbarProps {
  className?: string;
}

const Sidebar = React.memo((props: SiderbarProps) => {
	const { className } = props;
	const sidebarItems = useSelector(getSidebarItems);

	const [collapsed, setCollpased] = React.useState(false);

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
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
				onClick={() => setCollpased((prev) => !prev)}
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
});

Sidebar.displayName = "Sidebar";

export default Sidebar;