interface footerItemProps {
  href: string;
  text: string;
}

export const FooterItem = ({ href, text }: footerItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="relative inline-block font-medium text-base sm:pl-6 space-y-2 mt-2 text-white hover:text-emerald-300 duration-200"
      >
        {text}
      </a>
    </li>
  );
};
