import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { HomePage } from "pages/home";
import { AboutPage } from "pages/about";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme] )}>
      <header>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
        <button onClick={toggleTheme}>Theme</button>
      </header>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};
