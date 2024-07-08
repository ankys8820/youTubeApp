import { useState } from "react";
import "./Navbar.css";
import logo from "./yt.png";

const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
  const [authbtn, setauthbtn] = useState(false);
  const currentuser = null;
  return (
    <>
      <div className="Container_Navbar"></div>
    </>
  );
};

export default Navbar;
