import { useTheme } from "../../hooks/useTheme";
import { RiSunFill, RiMoonFill } from "react-icons/ri/index.js";

const DarkModeToggle = () => {
  const { theme, toggle } = useTheme();

  const Icon = theme === "light" ? RiMoonFill : RiSunFill;
  return (
    <button
      aria-label="toggle-darkmode"
      type="button"
      onClick={toggle}
      className="p-2 hover:scale-110 active:scale-90 transition-transform text-slate-100 hover:text-slate-200 dark:text-yellow-400 dark:hover:text-yellow-300"
    >
      <Icon size={26} />
    </button>
  );
};

export default DarkModeToggle;
