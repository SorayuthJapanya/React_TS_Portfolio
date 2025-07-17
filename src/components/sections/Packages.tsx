import { motion } from "framer-motion";
import { princingPlan } from "../../utils/pricing-plan";
import { PricingCard } from "../cards/PricingCard";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Packages = () => {
  return (
    <section id="Packages" className="py--12">
      <Container>
        <Title
          title="Packages"
          text="เลือกแพ็กเกจที่ตรงกับความต้องการของคุณ พร้อมฟีเจอร์ครบครันในราคาที่คุ้มค่า"
        />
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 sm:py-12">
          {princingPlan.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                subtitle={plan.subtitle}
                features={plan.features}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
