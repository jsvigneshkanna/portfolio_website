type Props = {
  navHeader: string;
  navHref: string;
};

const MobileNavLinks = (props: Props) => {
  const navHeader = props.navHeader;
  const navHref = props.navHref;
  return (
    <div>
      <a
        href={navHref}
        className="font-semibold text-xl hover:scale-105 capitalize dark:hover:bg-fuchsia-800 hover:bg-blue-200 px-10 py-2 rounded-xl transition-shadow hover:shadow-md hover:shadow-blue-400/80 dark:hover:shadow-blue-900/90"
      >
        {navHeader}
      </a>
    </div>
  );
};

export default MobileNavLinks;
