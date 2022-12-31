type Props = {
  tech: string;
};

const TechIcons = (props: Props) => {
  const tech = props.tech.toLowerCase().trim();

  const techIconMapping: any = {
    astro: <iconify-icon icon="vscode-icons:file-type-astro"></iconify-icon>,
    html: <iconify-icon icon="vscode-icons:file-type-html"></iconify-icon>,
    css: <iconify-icon icon="vscode-icons:file-type-css"></iconify-icon>,
    tailwindcss: <iconify-icon icon="logos:tailwindcss-icon"></iconify-icon>,
    reactjs: <iconify-icon icon="vscode-icons:file-type-reactjs"></iconify-icon>,
    nextjs: <iconify-icon icon="logos:nextjs-icon"></iconify-icon>,
    api: <iconify-icon icon="eos-icons:api"></iconify-icon>,
  };
  const techIcon = techIconMapping[tech];
  return <div>{techIcon}</div>;
};

export default TechIcons;
