import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import React from "react";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../selectors/getSidebarItems";
import SidebarDeprecated from "../SidebarDeprecated/SidebarDeprecated";
import SidebarRedesigned from "../SidebarRedesigned/SidebarRedesigned";

interface SiderbarProps {
  className?: string;
}

const Sidebar = React.memo((props: SiderbarProps) => {
	const { className } = props;
	const sidebarItems = useSelector(getSidebarItems);

	const [collapsed, setCollpased] = React.useState(false);

	const setCollapsedHandle = React.useCallback((isCollapsed: boolean) => {
		setCollpased(isCollapsed);
	}, []);

	return (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<SidebarRedesigned
					sidebarItems={sidebarItems}
					className={className}
				/>
			}
			off={
				<SidebarDeprecated
					className={className}
					collapsed={collapsed}
					setCollapsed={setCollapsedHandle}
					sidebarItems={sidebarItems}
				/>
			}
		/>
	);
});

Sidebar.displayName = "Sidebar";

export default Sidebar;