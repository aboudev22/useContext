import { useContext } from "react";
import { ThemeContexte } from "./ThemeContexte";

export function useThemeContext() {
  const context = useContext(ThemeContexte);
  if (!context) throw new Error("Erreur d'utilisation du contexte");
  return context;
}
