import air1 from "./assets/img/air_img.jpeg";
import air2 from "./assets/img/img2.jpeg";
import air3 from "./assets/img/img3.webp";
import dest1 from "./assets/img/dest1.jpeg";
import dest2 from "./assets/img/dest2.webp";
import dest3 from "./assets/img/dest3.jpeg";
import dest4 from "./assets/img/dest4.jpeg";

import "./assets/css/styles.css";

function App() {
  return (
    <div>
      {/*Header section */}
      <header>
        <a href=" " className="logo">
          Company
        </a>
        <div id="menu-icon" className="bx bx-menu"></div>
        <ul className="navbar">
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
      <section className="home" id="home">
        <div className="home-text">
          <h1>
            Company
            <br /> Travel & Tours
          </h1>
          <p id="para">
            ' The world is book and those who do not travel <br /> read only one
            page '
          </p>
          <a href="#" className="home-btn">
            Let's go now
          </a>
        </div>
      </section>
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
            <div className="container-image">
              <img src={air1} alt="" />
            </div>
            <h4>Air Trip</h4>
            <p>150 places</p>
          </div>
          {/* box */}
          <div className="container-box">
            <div className="container-image">
              <img src={air2} alt="" />
            </div>
            <h4>Air Trip</h4>
            <p>150 places</p>
          </div>
          {/* box */}
          <div className="container-box">
            <div className="container-image">
              <img src={air3} alt="" />
            </div>
            <h4>Air Trip</h4>
            <p>150 places</p>
          </div>
        </div>
      </section>
      {/* Packages section */}
      <section className="packages" id="packages">
        <div className="title">
          <h2>
            Our upcoming
            <br />
            Tour packages
          </h2>
          <div className="package-content">
            {/* box */}
            <div className="box">
              <div className="thum">
                <img src="" alt=""></img>
              </div>
              <div className="dest-content">
                <div className="location">
                  <h4>Place</h4>
                  <p>4h - 5h</p>
                </div>
                <div className="stars">
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* box */}
            <div className="box">
              <div className="thum">
                <img src="" alt=""></img>
              </div>
              <div className="dest-content">
                <div className="location">
                  <h4>Place</h4>
                  <p>4h - 5h</p>
                </div>
                <div className="stars">
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* box */}
            <div className="box">
              <div className="thum">
                <img src="" alt=""></img>
              </div>
              <div className="dest-content">
                <div className="location">
                  <h4>Place</h4>
                  <p>4h - 5h</p>
                </div>
                <div className="stars">
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* box */}
            <div className="box">
              <div className="thum">
                <img src="" alt=""></img>
              </div>
              <div className="dest-content">
                <div className="location">
                  <h4>Place</h4>
                  <p>4h - 5h</p>
                </div>
                <div className="stars">
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* box */}
            <div className="box">
              <div className="thum">
                <img src="" alt=""></img>
              </div>
              <div className="dest-content">
                <div className="location">
                  <h4>Place</h4>
                  <p>4h - 5h</p>
                </div>
                <div className="stars">
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* destination section */}
      <section className="destination" id="destination">
        <div className="title">
          <h2>
            Our most popular
            <br />
            Destination
          </h2>
        </div>
        <div className="destination-content">
          {/* content */}
          <div className="col-content">
            <img src={dest1} alt="Lush Landscapes – Barbados" />
            <h5>Place</h5>
            <p>Country</p>
          </div>
          {/* content */}
          <div className="col-content">
            <img src={dest2} alt="Netherlands, Amsterdam" />
            <h5>Place</h5>
            <p>Country</p>
          </div>
          {/* content */}
          <div className="col-content">
            <img src={dest3} alt="Santorini, Greece" />
            <h5>Place</h5>
            <p>Country</p>
          </div>
          {/* content */}
          <div className="col-content">
            <img src={dest4} alt="Bukovel Ukraine" />
            <h5>Place</h5>
            <p>Country</p>
          </div>
        </div>
      </section>
      {/* news letter section */}
      <section className="newsletter">
        <div className="news-text">
          <h2>Newsletter</h2>
          <p>
            Subscribe to receive upcoming packages <br /> and Services
          </p>
        </div>
        <div className="send">
          <form>
            <input type="email" placeholder="type your email" required />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
      {/* footer */}
      <section className="contact">
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
