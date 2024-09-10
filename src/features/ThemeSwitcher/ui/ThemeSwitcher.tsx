import { saveAccountSettings } from "@/entity/User";
import ThemeIcon from "@/shared/assets/icons/icon-colour.svg";
import MoonIconDeprecated from "@/shared/assets/icons/moon-fill.svg";
import SunIconDeprecated from "@/shared/assets/icons/sun-fill.svg";
import { Theme } from "@/shared/constants/theme";
import { classNames } from "@/shared/lib/classNames/className";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import Button from "@/shared/ui/Button/Button";
import ButtonDeprecated, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
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
			<ToggleFeature 
				name="isAppRedesigned"
				on={
					<Button variant="clear" onClick={toggleThemeHandler}>
						<ThemeIcon className={cls.icon} width={27} height={27} />
					</Button>
				}
				off={
					<ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={toggleThemeHandler}>
						{theme === Theme.LIGHT ? (
							<SunIconDeprecated className={cls.iconDeprecated} width={"24px"} height={"24px"} />
						) : (
							<MoonIconDeprecated className={cls.iconDeprecated} width={"24px"} height={"24px"} />
						)}
					</ButtonDeprecated>
				}
			/>
		</div>
	);
});

ThemeSwitcher.displayName = "ThemeSwitcher";


export default ThemeSwitcher;