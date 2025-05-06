import { useThemeContext } from "./utils/useThemeContext";

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`h-screen w-screen ${
        theme === "light" ? "bg-amber-50" : "bg-neutral-900"
      }`}
    >
      App
    </div>
  );
}
