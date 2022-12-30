import { useTheme } from "../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa/index.js";

const DarkModeToggle = () => {
  const { theme, toggle } = useTheme();

  const Icon = theme === "light" ? FaMoon : FaSun;
  return (
    <button
      aria-label="toggle-darkmode"
      type="button"
      onClick={toggle}
      className="p-2 hover:scale-110 active:scale-90 transition-transform text-slate-800 dark:text-slate-100"
    >
      <Icon size={26} />
    </button>
  );
};

export default DarkModeToggle;
