import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Gridsvg from "./gridsvg";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsSticky(current > 350);
  });
  return (
    <motion.nav
      className="nav-container"
      style={{
        position: isSticky ? "sticky" : "initial",
        top: 0,
        width: "100%",
        transition: "background 0.3s",
        zIndex: 10,
      }}
      animate={{ top: isSticky ? 0 : -100 }}
      initial={{ y: 0 }}
    >
      <div className="nav-bar">
        <div className="navbar-content">
          <span className="logo">Logo</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <motion.div className="background-mask">
          <div className="blur-filter"></div>
          <div className="mask-subcontainer">
            <Gridsvg width={1500} height={80} cellSize={4} />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
