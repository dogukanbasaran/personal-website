import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 100, height: "100%" }}
        transition={{
          duration: 0.5,
        }}
        className="mobile-menu"
      >
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </motion.div>
    </>
  );
};

export default MobileMenu;
