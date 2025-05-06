import { createContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

//ThemeContexte
export const ThemeContexte = createContext<ThemeContextType | undefined>(
  undefined
);
