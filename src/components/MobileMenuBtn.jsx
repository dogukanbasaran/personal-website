import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenu from "./MobileMenu";

const MobileMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={handleMobileBtn} className="btn-mobile-menu">
        {!isOpen ? (
          <MenuIcon sx={{ fontSize: "1.5em" }} />
        ) : (
          <CloseIcon sx={{ fontSize: "1.5em" }} />
        )}
      </button>
      {isOpen && <MobileMenu />}
    </>
  );
};

export default MobileMenuBtn;
