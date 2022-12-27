import { useTheme } from "../../hooks/useTheme";
import { HiSun } from "react-icons/hi/index.js";
import { BsFillMoonStarsFill } from "react-icons/bs/index.js";

const DarkModeToggle = () => {
  const { theme, toggle } = useTheme();

  const Icon = theme === "light" ? BsFillMoonStarsFill : HiSun;
  return (
    <button
      aria-label="toggle-darkmode"
      type="button"
      onClick={toggle}
      className="p-2 hover:scale-110 active:scale-90 transition-transform text-slate-800 dark:text-orange-400"
    >
      <Icon size={26} />
    </button>
  );
};

export default DarkModeToggle;
