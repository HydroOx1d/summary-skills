import React from 'react'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className={classNames(cls.Navbar)}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
      </div>
    </nav>
  );
}

export default Navbar