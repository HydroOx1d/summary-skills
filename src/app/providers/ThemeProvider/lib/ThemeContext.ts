import React from "react";
import { ThemeContextProps } from "../types/types";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  BLUE = "app_blue_theme",
}

export const ThemeContext = React.createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";