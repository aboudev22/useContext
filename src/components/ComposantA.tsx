import { useThemeContext } from "../utils/useThemeContext";

export default function ComposantA() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div
      className={`flex w-screen h-screen justify-center items-center transition-colors duration-500 ${
        theme === "dark" ? "bg-neutral-900" : "bg-neutral-300"
      }`}
    >
      <div className="w-sm flex justify-center flex-col items-center gap-2 h-44 p-4 bg-neutral-700 rounded-2xl">
        <p className="text-red-500 p-2 bg-red-300">{theme}</p>
        <button
          className={`p-2 rounded-md font-bold cursor-pointer transition-colors duration-500 ${
            theme === "dark" ? "text-black bg-white" : "text-white bg-black"
          }`}
          onClick={toggleTheme}
        >
          change theme
        </button>
      </div>
    </div>
  );
}
