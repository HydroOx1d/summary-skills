import HomeIconDeprecated from "@/shared/assets/icons/home.svg";
import AboutIconDeprecated from "@/shared/assets/icons/about.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile.svg";
import ArticlesIconDeprecated from "@/shared/assets/icons/article.svg";

import HomeIcon from "@/shared/assets/icons/icon-home.svg";
import AboutIcon from "@/shared/assets/icons/icon-about_app.svg";
import ProfileIcon from "@/shared/assets/icons/icon-profile.svg";
import ArticlesIcon from "@/shared/assets/icons/icon-article.svg";

import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entity/User";
import type { SidebarItemType } from "../model/types/sidebar";
import { getAboutRoute, getArticlesRoute, getMainRoute, getProfleRoute } from "@/shared/constants/router";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItems: SidebarItemType[] = [
		{
			path: getMainRoute(),
			Icon: toggleFeature({
				name: "isAppRedesigned",
				off: () => HomeIconDeprecated,
				on: () => HomeIcon
			}),
			text: "mainLink",
		},
		{
			path: getAboutRoute(),
			Icon: toggleFeature({
				name: "isAppRedesigned",
				off: () => AboutIconDeprecated,
				on: () => AboutIcon
			}),
			text: "aboutLink",
		},
		{
			path: getProfleRoute(authData?.id),
			Icon: toggleFeature({
				name: "isAppRedesigned",
				off: () => ProfileIconDeprecated,
				on: () => ProfileIcon
			}),
			text: "profileLink",
			onlyAuth: true,
		},
		{
			path: getArticlesRoute(),
			Icon: toggleFeature({
				name: "isAppRedesigned",
				off: () => ArticlesIconDeprecated,
				on: () => ArticlesIcon
			}),
			text: "articlesLink",
			onlyAuth: true,
		},
	];


	return sidebarItems;
});
