import React from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/className";
import ThemeSwitcher  from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher  from "shared/ui/LangSwitcher/LangSwitcher";
import Button, { ButtonTheme, SizesButton } from "shared/ui/Button/Button";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { routePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";

interface SiderbarProps {
  className?: string;
}

const Sidebar: React.FC<SiderbarProps> = (props) => {
	const {
		className
	} = props;

	const [collapsed, setCollpased] = React.useState(false);
	const {t} = useTranslation();

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={routePath.main}
				>
					<HomeIcon className={cls.linkIcon} width={24} height={24} />
					<span>{t("mainLink")}</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={routePath.about}
				>
					<AboutIcon className={cls.linkIcon} width={24} height={24} />
					<span>{t("aboutLink")}</span>
				</AppLink>
			</div>
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				data-testid="sidebar-collapse-btn"
				onClick={() => setCollpased((prev) => !prev)}
				className={cls.collapsedBtn}
				square
				size={SizesButton.L}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};

export default Sidebar;