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
        className="font-bold text-lg hover:scale-105 capitalize dark:hover:bg-cyan-700 hover:bg-blue-300 px-3 py-1 rounded-lg transition-shadow hover:shadow-md hover:shadow-blue-400/80 dark:hover:shadow-blue-900/90"
      >
        {navHeader}
      </a>
    </div>
  );
};

export default MobileNavLinks;
