import React from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/className";
import ThemeSwitcher  from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher  from "shared/ui/LangSwitcher/LangSwitcher";

interface SiderbarProps {
  className?: string;
}

const Sidebar: React.FC<SiderbarProps> = (props) => {
	const {
		className
	} = props;

	const [collapsed, setCollpased] = React.useState(false);

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button data-testid="sidebar-collapse-btn" onClick={() => setCollpased((prev) => !prev)}>Collapse</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher/>
			</div>
		</div>
	);
};

export default Sidebar;