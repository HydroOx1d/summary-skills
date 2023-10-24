import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/sun-fill.svg'
import MoonIcon from 'shared/assets/icons/moon-fill.svg'
import { classNames } from 'shared/lib/classNames/index';
import cls from "./ThemeSwitcher.module.scss";
import Button, { ButtonTheme } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string
}


const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {
    className
  } = props
  
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames(cls.ThemeSwticher, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
        {theme === Theme.LIGHT ? (
          <SunIcon width={"24px"} height={"24px"} />
        ) : (
          <MoonIcon width={"24px"} height={"24px"} />
        )}
      </Button>
    </div>
  );
}

export default ThemeSwitcher