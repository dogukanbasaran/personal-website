import * as motion from "motion/react-client";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="text-container"
    >
      <h1>Hi, I am Dogukan Basaran.</h1>
      <h2>I am a web developer and Data Analyst.</h2>
    </motion.div>
  );
};

export default Introduction;
