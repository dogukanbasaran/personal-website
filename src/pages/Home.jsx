import * as motion from "motion/react-client";
import Introduction from "../components/Introduction";
import Offers from "../components/Offers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <section className="home">
      <Introduction />
      <motion.span
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" className="arrow-icon" />
      </motion.span>

      <Offers />
    </section>
  );
};

export default Home;
