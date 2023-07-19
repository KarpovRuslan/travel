import { BiSolidPlaneTakeOff } from "react-icons/bi";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerClass, setHeaderClass] = useState();
  const [menuIcon, setMenuIcon] = useState("bx bx-menu");
  const [navBar, setNavBar] = useState("navbar");

  const menuClick = () => {
    if (menuIcon === "bx bx-menu" && navBar === "navbar") {
      setMenuIcon("bx bx-x");
      setNavBar("navbar open");
    } else {
      setMenuIcon("bx bx-menu");
      setNavBar("navbar");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderClass("stick");
        setMenuIcon("bx bx-menu");
        setNavBar("navbar");
      } else {
        setHeaderClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={headerClass}>
      <a href=" " className="logo">
        <BiSolidPlaneTakeOff style={{ marginRight: "10px" }} />
        FlyWithMe
      </a>
      <div id="menu-icon" className={menuIcon} onClick={menuClick} />
      <ul className={navBar}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#packages">Packages</a>
        </li>
        <li>
          <a href="#destination">Destination</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
