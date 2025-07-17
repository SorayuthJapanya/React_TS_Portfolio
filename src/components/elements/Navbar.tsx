import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import { NavItems } from "../shared/NavItems";
import { BtnLink } from "../shared/BtnLink";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react-refresh/only-export-components
export const navItems = [
  { href: "#", text: "Home" },
  { href: "#About-us", text: "About Us" },
  { href: "#Services", text: "Services" },
  { href: "#Portfolio", text: "Portfolio" },
  { href: "#Packages", text: "Packages" },
];

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveMenu(window.location.hash || "#");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 top-0 z-50 py-6"
    >
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* logo */}
          <div className="min-w-max inline-flex relative group">
            <a href="/" className="relative flex items-center gap-3 group-hover:scale-105 transfrom ease-in-out transition-all group-hover:-translate-y-1 duration-300">
              <img
                src={logo}
                alt="CodeSpiral Logo"
                className="w-12 h-12 rounded-full"
              />
              <div className="inline-flex text-lg font-bold text-white">
                Code Spiral
              </div>
            </a>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-white lg:bg-transparent border-x border-x-gray-50 lg:border-x-0 lg:h-auto h-0 overflow-hidden">
            <ul className="border-t border-gray-50 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 lg:gap-x-6 text-lg text-white w-full lg:justify-center lg:items-center ">
              {navItems.map((item, key) => (
                <NavItems
                  href={item.href}
                  text={item.text}
                  key={key}
                  active={activeMenu === item.href}
                />
              ))}
            </ul>

            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-white lg:border-0 px-6 lg:px-0">
              <BtnLink text="Hired Me !" href="cta" />
            </div>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
};
