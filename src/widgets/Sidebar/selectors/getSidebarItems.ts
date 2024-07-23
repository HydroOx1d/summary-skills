import HomeIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entity/User";
import type { SidebarItemType } from "../model/types/sidebar";
import { routePath } from "@/shared/constants/router";

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
