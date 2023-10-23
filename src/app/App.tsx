import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme] )}>
      <header>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
        <button onClick={toggleTheme}>Theme</button>
      </header>
      <AppRouter/>
    </div>
  );
};
