import React, {useState} from "react";
import Logo from "../assets/BlackandBlueInitialsCreativeLogo.png";
import { Link } from "react-router-dom";
import '@mui/material/styles';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggelNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <>
      <div className="navbar">
        <div className="nav-logo" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt=""/>
          <div className="hiddenLinks">
          <Link to="/"> Home </Link>
            <Link to="/services"> Services </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
          <div className="nav-container">
            <Link to="/"> Home </Link>
            <Link to="/services"> Services </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggelNavbar}>
              <ReorderIcon />
            </button>
          </div>
      </div>
    </>
  );
}

export default Navbar;
