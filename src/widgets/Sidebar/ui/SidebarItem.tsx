import { getUserAuthData } from "@/entity/User";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AppLink, { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import type { SidebarItemType } from "../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType
}

const SidebarItem = React.memo((props: SidebarItemProps) => {
	const {
		item
	} = props;
	
	const {t} = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	if(item.onlyAuth && !isAuth) {
		return null;
	}
  
	return (
		<AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
			<item.Icon className={cls.linkIcon} width={24} height={24} />
			<span>{t(item.text)}</span>
		</AppLink>
	);
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
