import React from "react";
import Destination from "./components/Destination";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Points from "./components/Points/Points";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Points />
      <Package />
      <Destination />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
