import { createContext } from "react";

type Theme = "light" | "dark";

type ThemeContexteType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContexte = createContext<ThemeContexteType | undefined>(
  undefined
);
