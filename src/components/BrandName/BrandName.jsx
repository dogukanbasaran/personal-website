import { Link } from "react-router-dom";
import "./BrandName.css";
import logo from "/dogukan.svg";

const BrandName = () => {
  return (
    <Link to={"/"} className="brand-name">
      <img src={logo} alt="" style={{ height: "40px", width: "160px" }} />
    </Link>
  );
};

export default BrandName;
