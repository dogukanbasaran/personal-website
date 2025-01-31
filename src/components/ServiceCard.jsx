import { motion } from "motion/react";

const ServiceCard = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="service-card">
      <span>{props.icon}</span>
      <h3 className="service-card-title">{props.title}</h3>
      <p className="service-card-description">{props.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
