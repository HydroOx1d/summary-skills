import React from "react";
import cls from "./SidebarRedesigned.module.scss";
import { classNames } from "@/shared/lib/classNames/className";
import { SidebarItemType } from "../../model/types/sidebar";
import Text, { TextSize, TextTheme } from "@/shared/ui/Text/Text";
import AppLink from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entity/User";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import HStack from "@/shared/ui/Stack/HStack/HStack";

interface SidebarRedesignedProps {
  className?: string;
  sidebarItems: SidebarItemType[];
}

const SidebarRedesigned = (props: SidebarRedesignedProps) => {
	const {
		className,
		sidebarItems
	} = props;

	const {t} = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	return (
		<VStack className={classNames(cls.SidebarRedesigned, {}, [className])}>
			<Text theme={TextTheme.PRIMARY} title="Skills Fusion" size={TextSize.M} className={cls.logo} />
			<VStack gap="4" className={cls.items}>
				{sidebarItems.map(sidebarItem => {
					if(sidebarItem.onlyAuth && !isAuth) {
						return null;
					}

					return (
						<AppLink key={sidebarItem.path} to={sidebarItem.path} className={cls.link}>
							<HStack gap="8" className={cls.item}>
								<sidebarItem.Icon className={cls.icon}/>
								<Text text={t(sidebarItem.text)}/>
							</HStack>
						</AppLink>
					);
				})}
			</VStack>

			<Button theme={ButtonTheme.BACKGROUND} className={cls.btn}>Создать статью</Button>
		</VStack>
	);
};

export default SidebarRedesigned;