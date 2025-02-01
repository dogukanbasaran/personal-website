import { Link } from "react-router-dom";
import "./BrandName.css";

const BrandName = () => {
  return (
    <Link to={"/"} className="brand-name">
      Dogukan.
    </Link>
  );
};

export default BrandName;
