import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import { navItems } from "./Navbar";
import { FooterItem } from "../shared/FooterItem";
import { FaGithub, FaLine } from "react-icons/fa";
import { Mail, PhoneCall } from "lucide-react";
import qrcode from "../../assets/qrcode.png";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <section className="z-100">
      <Container classname="pb-8">
        <hr className="my-6 border-gray-600" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="flex flex-col md:flex-row lg:justify-center items-start md:items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center gap-3 mb-4 md:mb-0"
            >
              <img src={logo} alt="logo" className="size-24 sm:size-32 " />
              <span className="text-xl font-semibold text-white">
                Code Spiral
              </span>
            </motion.div>
          </div>

          {/* Menu */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start "
          >
            <span className="text-xl font-semibold text-secondary">
              Our Menu
            </span>
            <ul className="flex flex-col gap-2 text-white/90 items-start">
              {navItems.map((item, key) => (
                <FooterItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start "
          >
            <span className="text-xl font-semibold text-secondary">
              Contact Us
            </span>
            <a
              href="https://github.com/SorayuthJapanya"
              target="_blank"
              className="relative group z-100"
            >
              <label htmlFor="github" className="flex gap-2 mt-4 items-center">
                <FaGithub className="p-2 rounded-full size-10 text-primary bg-white/90" />
                <p className="text-white font-medium group-hover:text-secondary cursor-pointer duration-100">
                  Euro Sorayuth
                </p>
              </label>
            </a>
            <a
              href="mailto:sorayuthjaapanya@gmail.com"
              target="_blank"
              className="relative group z-100"
            >
              <label htmlFor="github" className="flex gap-2 mt-4 items-center">
                <Mail className="p-2 rounded-full size-10 text-primary bg-white/90" />
                <p className="text-white font-medium group-hover:text-secondary cursor-pointer duration-100">
                  sorayuthjaapanya@gmail.com
                </p>
              </label>
            </a>
            <a href="tel:0889580681" className="relative group z-100">
              <label htmlFor="github" className="flex gap-2 mt-4 items-center">
                <PhoneCall className="p-2 rounded-full size-10 text-primary bg-white/90" />
                <p className="text-white font-medium group-hover:text-secondary cursor-pointer duration-100">
                  088-9580681
                </p>
              </label>
            </a>
            <a
              href="https://line.me/ti/p/@954rixvo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group z-100"
            >
              <label htmlFor="github" className="flex gap-2 mt-4 items-center">
                <FaLine className="p-2 rounded-full size-10 text-primary bg-white/90" />
                <p className="text-white font-medium group-hover:text-secondary cursor-pointer duration-100">
                  @954rixvo
                </p>
              </label>
            </a>
          </motion.div>

          {/* Line */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start gap-3 mb-4 md:mb-0"
          >
            <span className="text-xl font-semibold text-secondary">
              Line Chat
            </span>
            <img
              src={qrcode}
              alt="qrcode"
              className="size-36 sm:size-42 rounded-md"
            />
          </motion.div>
        </motion.div>

        {/* Line Chat */}

        {/* ส่วนล่าง */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center gap-4 text-sm text-white/60 py-2 mt-6 sm:mt-12"
        >
          <p>© 2025 Code Spiral. All rights reserved.</p>
        </motion.div>
      </Container>
    </section>
  );
};
