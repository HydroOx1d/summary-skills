import React from "react";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../model/items";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  item: SidebarItemType
}

const SidebarItem = React.memo((props: SidebarItemProps) => {
	const {
		item
	} = props;

	const {t} = useTranslation();
  
	return (
		<AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
			<item.Icon className={cls.linkIcon} width={24} height={24} />
			<span>{t(item.text)}</span>
		</AppLink>
	);
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
