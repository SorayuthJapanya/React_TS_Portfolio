import { Download } from "lucide-react";

interface BtnMeProps {
  href: string;
  text: string;
  classname?: string;
}

export const HeroMenu = ({ href, text, classname = "" }: BtnMeProps) => {
  return (
    <a
      href={href}
      className={`bg-gradient-to-r from-secondary to-indigo-600 rounded-full z-50 p-px transform transition-all hover:scale-107 duration-300 w-full max-w-full ${classname}`}
    >
      <div className="flex justify-center items-center gap-4 px-6 py-3 bg-primary hover:bg-gradient-to-r hover:from-secondary hover:to-indigo-600 rounded-full transition-colors duration-300">
        <span className="relative z-10 text-white font-normal">{text}</span>
        <Download className="size-4 text-white" />
      </div>
    </a>
  );
};
