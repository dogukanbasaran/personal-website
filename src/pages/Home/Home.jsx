import * as motion from "motion/react-client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Introduction from "../../components/Introduction/Introduction";
import Offers from "../../components/Offers/Offers";
import "./Home.css";

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
        <KeyboardArrowDownIcon
          sx={{ fontSize: "3em" }}
          className="arrow-icon"
        />
      </motion.span>
      <Offers />
    </section>
  );
};

export default Home;
