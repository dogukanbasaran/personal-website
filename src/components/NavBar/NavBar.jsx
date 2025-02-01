import { Link } from "react-router-dom";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <MobileMenuBtn />
    </>
  );
};

export default NavBar;
