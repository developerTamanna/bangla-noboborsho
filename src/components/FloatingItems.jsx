import { motion } from "framer-motion";

const FloatingItems = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, type: "spring" }}
      className="text-3xl text-center text-yellow-500 mt-10"
    >
      🎉 শুভ নববর্ষ ১৪৩২ 🎉
    </motion.div>
  );
};

export default FloatingItems;
