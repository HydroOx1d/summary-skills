import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { HomeAsyncComponent } from "./pages/home/Home.async";
import { AboutAsyncComponent } from "./pages/about/About.async";
import { Link } from "react-router-dom";
import React from "react";

export const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
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
