interface navItemsProps {
  href: string;
  text: string;
  active: boolean;
}

export const NavItems = ({ href, text, active = false }: navItemsProps) => {
  return (
    <li>
      <a
        href={href}
        className={`relative inline-block font-medium py-3 px-3 text-white/80 hover:text-white transition-all duration-300 ease-in-out
          before:content-[''] before:absolute before:bottom-1 before:left-3 before:h-[2px] before:bg-gradient-to-r 
          before:from-emerald-400 before:to-cyan-500 before:transition-all before:duration-500 hover:before:w-[calc(100%-1.5rem)]
          ${active ? "before:w-[calc(100%-1.5rem)]  text-white" : "before:w-0"}`}
      >
        {text}
      </a>
    </li>
  );
};
