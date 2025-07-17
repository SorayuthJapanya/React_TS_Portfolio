import { motion } from "framer-motion";

interface ParagraphProps {
  children: React.ReactNode;
  classname?: string;
}

export const Paragraph = ({ children, classname = "" }: ParagraphProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`md:text-lg ${classname}`}
    >
      {children}
    </motion.p>
  );
};
