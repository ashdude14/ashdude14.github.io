import { useState } from "react";
//import "../dist/styles.css";
import Switch from "react-switch"
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTheme } from "../context/themeContext";
import React from "react";
import ReactSwitch from "react-switch";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const { theme, toggleTheme } = useTheme();
 
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <nav>
      <div  className="switch">
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      <label>{theme === "light" ? "light mode" : "dark mode"} </label>
      </div>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <IconMenu2 className="mobile-menu" width={30} height={30} />
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <IconX width={30} height={30} />
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
