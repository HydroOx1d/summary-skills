import { getUserAuthData } from "@/entity/User";
import { classNames } from "@/shared/lib/classNames/className";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import { AppLink as AppLinkDeprecated, AppLinkTheme } from "@/shared/ui/deprecated/AppLink/AppLink";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import Text from "@/shared/ui/Text/Text";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { SidebarItemType } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
	className?: string
}

const SidebarItem = React.memo((props: SidebarItemProps) => {
	const {
		item,
		className
	} = props;
	
	const {t} = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	if(item.onlyAuth && !isAuth) {
		return null;
	}
  
	return (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<NavLink key={item.path} to={item.path} className={({isActive}) => classNames(cls.SidebarItemRedesigned, {[cls.active]: isActive}, [className])}>
					<HStack gap="8" className={cls.item} align="center">
						<item.Icon width={17} height={17} className={cls.linkIcon}/>
						<Text className={cls.linkText} tag="span" >{t(item.text)}</Text>
					</HStack>
				</NavLink>
			}
			off={
				<AppLinkDeprecated theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.SidebarItemDeprecated, {}, [className])}>
					<item.Icon className={cls.linkIcon} width={24} height={24} />
					<span>{t(item.text)}</span>
				</AppLinkDeprecated>
			}
		/>
	);
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
