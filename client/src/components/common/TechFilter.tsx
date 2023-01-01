type Props = {
  setFilterValue: Function;
};

const TechFilter = (props: Props) => {
  return (
    <div className="flex flex-row flex-wrap bg-slate-200 dark:bg-slate-700 px-2 py-2 rounded-3xl gap-4 justify-start items-center">
      <button
        className=" min-w-max px-2 bg-slate-700 dark:bg-slate-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("all")}
      >
        All
      </button>
      <button
        className=" min-w-max px-2 bg-green-700 dark:bg-green-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("reactjs")}
      >
        ReactJS
      </button>
      <button
        className=" min-w-max px-2 bg-orange-700 dark:bg-blue-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("nextjs")}
      >
        NextJS
      </button>
      <button
        className=" min-w-max px-2 bg-pink-700 dark:bg-pink-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("js")}
      >
        Javascript
      </button>
      <button
        className=" min-w-max px-2 bg-red-700 dark:bg-red-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("css")}
      >
        CSS
      </button>
      <button
        className=" min-w-max px-2 bg-yellow-700 dark:bg-yellow-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("html")}
      >
        HTML
      </button>
      <button
        className=" min-w-max px-2 bg-cyan-700 dark:bg-cyan-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("tailwindcss")}
      >
        TailwindCSS
      </button>
      <button
        className=" min-w-max px-2 bg-rose-700 dark:bg-rose-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("api")}
      >
        API
      </button>
      <button
        className=" min-w-max px-2 bg-sky-700 dark:bg-sky-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
        onClick={props.setFilterValue("astro")}
      >
        AstroDEV
      </button>
    </div>
  );
};

export default TechFilter;
