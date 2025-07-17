interface BtnLinkProps {
  href: string;
  text: string;
  classname?: string;
}

export const BtnLink = ({ href, text, classname = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden cursor-pointer transform transition-colors duration-700 hover:scale-102 bg-gradient-to-r from-secondary to-indigo-600 hover:from-indigo-600 hover:to-secondary ${classname}`}
    >
      <span className="relative z-10 text-white font-medium">{text}</span>
    </a>
  );
};
