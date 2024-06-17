import { routePath } from "@/shared/config/routeConfig/routeConfig";
import HomeIcon from "@/shared/assets/icons/home.svg?react";
import AboutIcon from "@/shared/assets/icons/about.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";
import ArticlesIcon from "@/shared/assets/icons/article.svg?react";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entity/User";
import type { SidebarItemType } from "../model/types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItems: SidebarItemType[] = [
		{
			path: routePath.main,
			Icon: HomeIcon,
			text: "mainLink",
		},
		{
			path: routePath.about,
			Icon: AboutIcon,
			text: "aboutLink",
		},
		{
			path: routePath.profile + authData?.id,
			Icon: ProfileIcon,
			text: "profileLink",
			onlyAuth: true,
		},
		{
			path: routePath.articles,
			Icon: ArticlesIcon,
			text: "articlesLink",
			onlyAuth: true,
		},
	];


	return sidebarItems;
});
