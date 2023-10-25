import React from 'react'
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const Navbar = () => {
  return (
    <nav className={classNames(cls.Navbar)}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О нас</AppLink>
      </div>
    </nav>
  );
}

export default Navbar