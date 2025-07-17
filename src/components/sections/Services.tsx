import { services } from "../../utils/service";
import { Container } from "../shared/Container";
import { Service } from "../cards/Service";
import { Title } from "../shared/Title";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section id="Services" className="pt-12">
      <Container classname="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Title
            title="My Services"
            text="เราให้บริการออกแบบและพัฒนาเว็บไซต์ครบวงจร ตั้งแต่เว็บไซต์ส่วนตัว ไปจนถึงระบบที่ซับซ้อนสำหรับองค์กร ไม่ว่าคุณจะต้องการเว็บไซต์ที่ดูดี ใช้งานง่าย หรือระบบหลังบ้านที่ตอบโจทย์ธุรกิจ"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}

          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <Service
              key={index}
              id={(index + 1).toString().padStart(2, "0")}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
