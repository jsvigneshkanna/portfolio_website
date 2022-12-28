import DarkModeToggle from "./darkModeToggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center bg-blue-200/90 dark:bg-blue-700/90 shadow-md shadow-slate-400 dark:shadow-slate-700/75 px-4 md:px-52">
      {/* Left navlinks */}
      <div className="flex justify-center items-center gap-8">
        <a
          href="/home"
          className="font-bold text-lg hover:scale-105 capitalize dark:hover:bg-blue-800 hover:bg-blue-300/70 px-2 rounded-lg"
        >
          home
        </a>
        <a
          href="/aboutme"
          className="font-bold text-lg hover:scale-105 capitalize dark:hover:bg-blue-800 hover:bg-blue-300/70 px-2 rounded-lg"
        >
          about me
        </a>
        <a
          href="/blogs"
          className="font-bold text-lg hover:scale-105 capitalize dark:hover:bg-blue-800 hover:bg-blue-300/70 px-2 rounded-lg"
        >
          blogs
        </a>
        <a
          href="/projects"
          className="font-bold text-lg hover:scale-105 capitalize dark:hover:bg-blue-800 hover:bg-blue-300/70 px-2 rounded-lg"
        >
          projects
        </a>
      </div>
      {/* theme toggler */}
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
