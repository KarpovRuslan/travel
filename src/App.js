/* eslint-disable jsx-a11y/anchor-is-valid */

import trip1 from "./assets/img/trip2.png";
import trip2 from "./assets/img/trip3.png";
import trip3 from "./assets/img/trip4.png";

import "./assets/css/styles.css";
import React from "react";
import Destination from "./components/Destination";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
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
            <h4>Best meal</h4>
            <p>150 places</p>
          </div>
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

      <Package />
      <Destination />
      <Newsletter />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
