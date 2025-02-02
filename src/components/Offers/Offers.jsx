import ServiceCard from "../ServiceCard/ServiceCard";
import CodeIcon from "@mui/icons-material/Code";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { motion } from "motion/react";
import "./Offers.css";

const Offers = () => {
  return (
    <motion.div
      className="offers-container"
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <div className="offers-text">
        <h3>My Expertise & Services</h3>
        <span>Delivering Tailored Solutions for Your Needs</span>
      </div>
      <div className="offers">
        <ServiceCard
          icon={<CodeIcon sx={{ fontSize: "2.5em" }} />}
          title={"Building Web Apps"}
          description={`As a React Developer, I can create dynamic and user-friendly web applications 
            using modern JavaScript technologies.`}
        />
        <ServiceCard
          icon={<AnalyticsIcon sx={{ fontSize: "2.5em" }} />}
          title={"Analyzing Data"}
          description={`With Python, I analyze data efficiently, 
            using libraries like NumPy, Pandas and Matplotlib to uncover meaningful patterns.`}
        />
      </div>
    </motion.div>
  );
};

export default Offers;
