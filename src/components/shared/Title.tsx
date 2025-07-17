import { motion } from "framer-motion";

interface TiltleProps {
  title: string;
  text: string;
}

export const Title = ({ title, text }: TiltleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center gap-4 w-full text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-max text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-secondary"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-base sm:text-lg text-gray-300"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
