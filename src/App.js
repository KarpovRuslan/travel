/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiSolidPlaneTakeOff } from "react-icons/bi";

import trip1 from "./assets/img/trip2.png";
import trip2 from "./assets/img/trip3.png";
import trip3 from "./assets/img/trip4.png";

import "./assets/css/styles.css";
import React, { useEffect, useState } from "react";
import Destination from "./components/Destination";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";

function App() {
  const [headerClass, setHeaderClass] = useState();
  const [menuIcon, setMenuIcon] = useState("bx bx-menu");
  const [navBar, setNavBar] = useState("navbar");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderClass("stick");
        setMenuIcon("bx bx-menu");
        setNavBar("navbar");
        console.log("stick");
      } else {
        setHeaderClass("");
        console.log("non-stick");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuClick = () => {
    if (menuIcon === "bx bx-menu" && navBar === "navbar") {
      setMenuIcon("bx bx-x");
      setNavBar("navbar open");
    } else {
      setMenuIcon("bx bx-menu");
      setNavBar("navbar");
    }
  };

  return (
    <div>
      {/*Header section */}
      <header className={headerClass}>
        <a href="" className="logo">
          <BiSolidPlaneTakeOff style={{ marginRight: "10px" }} />
          FlyWithMe
        </a>
        <div id="menu-icon" className={menuIcon} onClick={menuClick}></div>
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
      {/*Home section */}
      <Home />

      {/*container */}
      <section className="container">
        <div className="text">
          <h2>
            Start your vacation
            <br /> With lots of services
          </h2>
        </div>
        <div className="row-items">
          {/* box */}
          <div className="container-box">
            <div className="container-img">
              <img src={trip1} alt="" />
            </div>
            <h4>Air Trip</h4>
            <p>150 places</p>
          </div>
          {/* box */}
          <div className="container-box">
            <div className="container-img">
              <img src={trip2} alt="" />
            </div>
            <h4>Summer Trip</h4>
            <p>170 places</p>
          </div>
          {/* box */}
          <div className="container-box">
            <div className="container-img">
              <img src={trip3} alt="" />
            </div>
            <h4>Winter Trip</h4>
            <p>120 places</p>
          </div>
        </div>
      </section>

      {/* Packages section */}
      <Package />

      <Destination />
      <Newsletter />

      {/* footer */}
      <section className="contact" id="contact">
        <div className="footer">
          <div className="main">
            {/* list */}
            <div className="list">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Terms and conditions</a>
                </li>
                <li>
                  <a>Help</a>
                </li>
                <li>
                  <a>Tour</a>
                </li>
              </ul>
            </div>
            {/* list */}
            <div className="list">
              <h4>Support</h4>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Terms and conditions</a>
                </li>
                <li>
                  <a>Help</a>
                </li>
                <li>
                  <a>Tour</a>
                </li>
              </ul>
            </div>
            {/* list */}
            <div className="list">
              <h4>Contact info</h4>
              <ul>
                <li>
                  <a>Line1</a>
                </li>
                <li>
                  <a>Line2</a>
                </li>
                <li>
                  <a>Telephone number</a>
                </li>
                <li>
                  <a>email</a>
                </li>
              </ul>
            </div>
            {/* list */}
            <div className="list">
              <h4>Connect</h4>
              <div className="social">
                <a href="">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
                <a href="">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="end-text">
          <p>Copyright @2023 all rights reserved | made by R. Karpov</p>
        </div>
      </section>
    </div>
  );
}

export default App;
