import React from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ThemeSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <header className="header">
        <ThemeSwitcher />
        <Navbar />
      </header>
      <main className="main">
        <AppRouter />
      </main>
    </div>
  );
};
