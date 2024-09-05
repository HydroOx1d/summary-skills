import { saveAccountSettings } from "@/entity/User";
import MoonIcon from "@/shared/assets/icons/moon-fill.svg";
import SunIcon from "@/shared/assets/icons/sun-fill.svg";
import { Theme } from "@/shared/constants/theme";
import { classNames } from "@/shared/lib/classNames/className";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import Button, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import React from "react";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = React.memo((props: ThemeSwitcherProps) => {
	const {
		className
	} = props;
  
	const {theme, toggleTheme} = useTheme();
	const dispatch = useThunkDispatch();

	const toggleThemeHandler = React.useCallback(() => {
		toggleTheme((theme) => {
			dispatch(saveAccountSettings({
				theme
			}));
		});
	}, [dispatch, toggleTheme]);

	return (
		<div className={classNames(cls.ThemeSwticher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={toggleThemeHandler}>
				{theme === Theme.LIGHT ? (
					<SunIcon className={cls.icon} width={"24px"} height={"24px"} />
				) : (
					<MoonIcon className={cls.icon} width={"24px"} height={"24px"} />
				)}
			</Button>
		</div>
	);
});

ThemeSwitcher.displayName = "ThemeSwitcher";


export default ThemeSwitcher;