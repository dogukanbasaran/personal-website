import BrandName from "../BrandName/BrandName";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <BrandName />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
