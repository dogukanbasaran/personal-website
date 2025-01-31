import { motion } from "motion/react";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1,
      }}
      className="text-container"
    >
      <h1>Hi, I am Dogukan Basaran.</h1>
      <h2>I am a web developer and Data Analyst.</h2>
    </motion.div>
  );
};

export default Introduction;
