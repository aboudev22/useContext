import { useContext, useState, type ReactNode } from "react";
import { ThemeContexte } from "./ThemeContext";

type Theme = "light" | "dark";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContexte.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContexte.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const context = useContext(ThemeContexte);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
