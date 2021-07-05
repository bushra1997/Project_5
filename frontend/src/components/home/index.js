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
      <section>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active drk">
              <img
                src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/175765/pexels-photo-175765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/3747434/pexels-photo-3747434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="d-block"
                alt="..."
              />
            </div>

            <div class="carousel-item drk">
              <img
                src="https://images.pexels.com/photos/3184180/pexels-photo-3184180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="d-block"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center">How Occasion can help</h1>
          <div className="row" style={{ padding: "2.5% 0%" }}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="image">
                <img
                  style={{ width: "80%" }}
                  src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul class="list-group">
                <li class="list-group-item">
                  <span className="fa-li">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  <div className="container">
                    <h4>Turn more website visits into bookings</h4>
                    <p>
                      Your new calendar is so irresistible it turns your website
                      into a booking machine.
                    </p>
                  </div>
                </li>
                <li class="list-group-item">
                  <span className="fa-li">
                    <i class="fas fa-wallet"></i>
                  </span>
                  <div className="container">
                    <h4>Get bookings directly from Facebook and Google</h4>
                    <p>
                      Your events automatically show up on Facebook and Google
                      so even more customers can find you.
                    </p>
                  </div>
                </li>
                <li class="list-group-item">
                  <span className="fa-li">
                    <i class="fas fa-mail-bulk"></i>
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
                <li class="list-group-item">
                  <span className="fa-li">
                    <i class="fas fa-clock"></i>
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
      <section>
        <div className="container">
          <h1 className="text-center">Highlights</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="" class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn">
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="" class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn">
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <h1>Companies that trust Occasion to attract more bookings</h1>
          <div className="row">
            
          </div>
        </div>
      </section> */}
    </>
  );
}
