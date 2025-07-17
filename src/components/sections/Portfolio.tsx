import { motion } from "framer-motion";
import { websites } from "../../utils/websites";
import { PortflioCard } from "../cards/PortflioCard";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Portfolio = () => {
  return (
    <section id="Portfolio" className="pt-12">
      <Container classname="spacce-y-8">
        <div>
          <Title
            title="Our Projects"
            text="รวมตัวอย่างเว็บไซต์ที่พวกเราออกแบบและพัฒนาด้วยความตั้งใจ
และความใส่ใจ เพื่อให้ใช้งานจริง ตอบโจทย์ธุรกิจ และดูดีในทุกอุปกรณ์"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gris-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12"
        >
          {websites.map((website, index) => (
            <PortflioCard
              key={index}
              name={website.name}
              image={website.image}
              url={website.url}
              domain={website.domain}
              category={website.category}
              year={website.year}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
