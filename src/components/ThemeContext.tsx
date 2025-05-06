// ThemeContext.tsx
import { createContext, useState, useContext, type ReactNode } from "react";

// Le type du thème
type Theme = "light" | "dark";

// Le type du contexte
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Création du contexte
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
