import { Route, Routes } from "react-router-dom";
import { HomeAsyncComponent } from "./pages/home/Home.async";
import { AboutAsyncComponent } from "./pages/about/About.async";
import { Link } from "react-router-dom";
import React from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

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
          <Route path="/" element={<HomeAsyncComponent />} />
          <Route path="/about" element={<AboutAsyncComponent />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};
