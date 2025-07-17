import { Container } from "../shared/Container";
import { motion } from "framer-motion";

export const Numbers = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="ralative mt-12 md:mt-16"
    >
      <Container classname="flex justify-center items-center">
        <motion.div className="mx-auto lg:mx-0 p-5 sm:p-6 max-w-5xl rounded-3xl bg-emerald-500/10 md:divide-x divide-white/40 border border-white/30 grid grid-cols md:grid-cols-4 gap-4">
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-white/90">
              1
            </h2>
            <p className="mt-2 text-gray-300">Years of Experience</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-white/90">
              1
            </h2>
            <p className="mt-2 text-gray-300">Project Completed</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-white/90">
              0
            </h2>
            <p className="mt-2 text-gray-300">Enterpise Clients</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-white/90">
              In Progress
            </h2>
            <p className="mt-2 text-gray-300">Next Big Milestone</p>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};
