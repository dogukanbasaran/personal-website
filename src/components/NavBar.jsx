import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      <button className="btn-mobile-menu">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default NavBar;
