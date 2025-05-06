import { useState, type ReactNode } from "react";
import { ThemeContexte } from "../utils/ThemeContexte";

type Theme = "light" | "dark";

export default function ThemeProvider({ children }: { children: ReactNode }) {
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
