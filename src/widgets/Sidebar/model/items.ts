import { FC, SVGProps } from "react";
import { routePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/article.svg";

export interface SidebarItemType {
  path: string;
  Icon: FC<SVGProps<SVGElement>>;
  text: string;
	onlyAuth?: boolean;
}


export const sidebarItems: SidebarItemType[] = [
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
		path: routePath.profile,
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