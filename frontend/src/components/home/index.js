import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./home.css";

export default function Index() {
  const token = localStorage.getItem("token");
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/img`)
      .then((result) => {
        if (result.status == 200) {
          setImages(result.data);
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active drk">
            <img
              src="https://images.pexels.com/photos/2788492/pexels-photo-2788492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="d-block"
              alt="..."
              style={{ height: "65vh" }}
            />
          </div>
          <div className="carousel-item drk">
            <img
              src="https://images.pexels.com/photos/1123254/pexels-photo-1123254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block"
              alt="..."
              style={{ height: "65vh" }}
            />
          </div>
          <div className="carousel-item drk">
            <img
              src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block"
              alt="..."
              style={{ height: "65vh" }}
            />
          </div>
          <div className="carousel-item drk">
            <img
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block"
              alt="..."
              style={{ height: "65vh" }}
            />
          </div>
          <div className="carousel-item drk">
            <img
              src="https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block"
              alt="..."
              style={{ height: "70vh" }}
            />
            
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section>
        <div className="container">
          <h1 className="text-center">How Occasion can help</h1>
          <div className="row" style={{ padding: "2.5% 0%" }}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="image">
                <img
                  style={{ width: "80%", borderRadius: "8px" }}
                  src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-user-plus"></i>
                  </span>
                  <div className="container">
                    <h4>Turn more website visits into bookings</h4>
                    <p>
                      Your new calendar is so irresistible it turns your website
                      into a booking machine.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-wallet"></i>
                  </span>
                  <div className="container">
                    <h4>Get bookings directly from Facebook and Google</h4>
                    <p>
                      Your events automatically show up on Facebook and Google
                      so even more customers can find you.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-mail-bulk"></i>
                  </span>
                  <div className="container">
                    <h4>
                      Drive more repeat bookings with built-in marketing tools
                    </h4>
                    <p>
                      Automated emails and other marketing tools make customers
                      come back for more without you having to lift a finger.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-clock"></i>
                  </span>
                  <div className="container">
                    <h4>Cut down your time spent on admin</h4>
                    <p>
                      Spend less time on the phone or with clunky tools and more
                      time with your growing customer base.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#FBF7F0" }}>
        <div className="container">
          <h1 className="text-center">Highlights</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12" id="card">
              <div className="card">
                <div>
                  <img
                    src="https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    class="card-img-top"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Al-Hussam Halls For Events</h5>
                  <p className="card-text">
                    Al-Muqablain - Radio and Television Street - behind the
                    wholesale markets.
                  </p>
                  <a
                    href="http://localhost:3000/places/weddings/2"
                    className="btn"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" id="card">
              <div className="card">
                <div>
                  <img
                    src="https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    class="card-img-top"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ugarit Hall</h5>
                  <p className="card-text">
                    Sweileh - Princess Raya Bint Al Hussein Street.
                  </p>
                  <a
                    href="http://localhost:3000/places/meeting/6"
                    className="btn"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" id="card">
              <div className="card">
                <div>
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Al Anoud International Halls</h5>
                  <p className="card-text">
                  Amman
Gardens - between Al Kalha Restaurant and Al Tazaj Restaurant
                  </p>
                  <a
                    href="http://localhost:3000/places/birthDayParty/7"
                    className="btn"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <h1>Companies that trust Occasion to attract more bookings</h1>
          <div className="row">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://www.getoccasion.com/wp-content/uploads/2019/10/bees-small.png"
                    alt=""
                    width="120px"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://www.getoccasion.com/wp-content/uploads/2019/10/chop-small.png"
                    alt=""
                    width="130px"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://www.getoccasion.com/wp-content/uploads/2019/10/jump-small.png"
                    alt=""
                    width="130px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
