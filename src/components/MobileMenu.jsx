import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
