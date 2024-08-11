import HomeIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entity/User";
import type { SidebarItemType } from "../model/types/sidebar";
import { getAboutRoute, getArticlesRoute, getMainRoute, getProfleRoute } from "@/shared/constants/router";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItems: SidebarItemType[] = [
		{
			path: getMainRoute(),
			Icon: HomeIcon,
			text: "mainLink",
		},
		{
			path: getAboutRoute(),
			Icon: AboutIcon,
			text: "aboutLink",
		},
		{
			path: getProfleRoute(authData?.id),
			Icon: ProfileIcon,
			text: "profileLink",
			onlyAuth: true,
		},
		{
			path: getArticlesRoute(),
			Icon: ArticlesIcon,
			text: "articlesLink",
			onlyAuth: true,
		},
	];


	return sidebarItems;
});
