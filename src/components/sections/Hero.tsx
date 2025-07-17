import { Container } from "../shared/Container";
import { HeroMenu } from "../shared/HeroMenu";
import { Paragraph } from "../shared/Paragraph";
import banner from "../../assets/hero-image.jpg";
import { Numbers } from "./Numbers";
import { motion } from "framer-motion";

const heroMenu = [
  { href: "#Portfolio", text: "ผลงานของเรา" },
  { href: "#Packages", text: "แพ็คเกจของเรา" },
];

export const Hero = () => {
  return (
    <motion.section
      id="About-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-32 lg:pt-36"
    >
      <Container classname="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-emerald-400 to-indigo-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-secondary blur-xl opacity-80 block lg:hidden"></span>
        </div>

        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-white"
          >
            CODE SPIRAL
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-secondary mt-2"
          >
            We Design. We Code. You Grow.
          </motion.span>

          <Paragraph classname="mt-8 text-white text-normal">
            Code Spiral คือทีมเล็ก ๆ
            ที่เริ่มต้นจากความหลงใหลในการสร้างเว็บไซต์และระบบที่ใช้งานได้จริง
            เราอาจไม่ใช่บริษัทใหญ่ แต่เรามีไอเดียใหม่ ๆ
            และพร้อมลุยทุกโปรเจกต์เพื่อเรียนรู้และพัฒนาตัวเองอยู่ตลอดเวลา
            เราเชื่อว่าการลงมือทำจริงคือประสบการณ์ที่ดีที่สุด
            และทุกงานที่เราทำคืองานที่เราใส่ใจ — เพราะเรากำลังสร้างพอร์ต
            สร้างฝีมือ และสร้างอนาคตของเราเอง
          </Paragraph>

          <div className="mt-10 w-full flex max-w-lg mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center px-8"
            >
              {heroMenu.map((item, index) => (
                <HeroMenu href={item.href} text={item.text} key={index} />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={banner}
            alt="banner"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96 opacity-80"
          />
        </div>
      </Container>
      <Numbers />
    </motion.section>
  );
};
