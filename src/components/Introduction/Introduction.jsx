import { motion } from "motion/react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1,
      }}
      className="introduction"
    >
      <div className="introduction-text">
        <motion.h1
          initial={{
            WebkitTextFillColor: "transparent",
            clipPath: "inset(0 100% 0 0)",
          }}
          animate={{
            WebkitTextFillColor: "#e9e9e9",
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="stroked-text"
        >
          Hi, I am Dogukan Basaran.
        </motion.h1>
        <motion.h2
          initial={{
            WebkitTextFillColor: "transparent",
            clipPath: "inset(0 100% 0 0)",
          }}
          animate={{
            WebkitTextFillColor: "#e9e9e9",
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="stroked-text"
        >
          I am a web developer and Data Analyst.
        </motion.h2>
      </div>
      <img src="/rb_17049.png" />
    </motion.div>
  );
};

export default Introduction;
