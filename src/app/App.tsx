import React from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <header className="header">
        <Navbar />
        <button onClick={toggleTheme}>Theme</button>
      </header>
      <main className="main">
        <AppRouter />
      </main>
    </div>
  );
};
