import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none",
  });

  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({
        display: "flex",
      });
    } else {
      settoggledrawersidebar({
        display: "none",
      });
    }
  };

  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);

  return (
    <>
      <Navbar
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        toggledrawer={toggledrawer}
      />
    </>
  );
};

export default App;
