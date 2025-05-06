import ComposantA from "./components/ComposantA";
import { ThemeProvider } from "./utils/useThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <ComposantA />
    </ThemeProvider>
  );
}
