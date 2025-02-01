import { Outlet } from "react-router";
import { motion, useScroll } from "motion/react";
import "./Main.css";

const Main = () => {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <div className="container">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            background:
              "linear-gradient(120deg, rgba(50,128,205, 0.5) 0%, rgba(10,41,10, 1) 100%)",
          }}
        />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
