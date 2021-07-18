import { React, useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

export default function Index() {
  const token = localStorage.getItem("token");
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`/places/img`)
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
        id="carouselFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/2788492/pexels-photo-2788492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1123254/pexels-photo-1123254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.furneauxlodge.co.nz/media/u30njmm1/furneaux-waterfront-wedding.jpg?center=0.697690120557852,0.48&mode=crop&width=1900&heightratio=0.296875&rnd=132622840494170000&bgcolor=fff"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselFade"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselFade"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <section>
        <div className="container">
          <h1 className="text-center">How Occasion can help</h1>
          <div className="row" style={{ padding: "2.5% 0%" }}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="imageO">
                <img
                  style={{}}
                  src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-globe-americas"></i>
                  </span>
                  <div className="container">
                    <h4>Expand the base of places that you can reach.</h4>
                    <p>
                      Your way to reach a lot of places that you were unable to
                      see easily, by using our app it becomes possible.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-hand-holding-usd"></i>
                  </span>
                  <div className="container">
                    <h4>Take a tour while you are at home.</h4>
                    <p>
                      Get access to more than 200 places with different
                      occasions around the world, with the best prices and match
                      your needs.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-users"></i>
                  </span>
                  <div className="container">
                    <h4>Direct connection with places owners.</h4>
                    <p>
                      You will get direct access to our places owners database,
                      for more info and details.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="fa-li">
                    <i className="fas fa-clock"></i>
                  </span>
                  <div className="container">
                    <h4>Cut down your time spent on physical searching.</h4>
                    <p>
                      Spend less time searching for a place for your occasions,
                      stop doing it like old school, Find all you need in one
                      place.
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
                    src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="card-img-top"
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
                    src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="card-img-top"
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
                    Amman Gardens - between Al Kalha Restaurant and Al Tazaj
                    Restaurant
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
