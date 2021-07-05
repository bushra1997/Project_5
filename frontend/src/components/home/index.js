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
        <div className="container">
          <h1>How Occasion can help</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="image">
                <img src="https://i1.wp.com/www.getoccasion.com/wp-content/uploads/2019/09/11-img_20190903_000305x.jpg?resize=500%2C598&ssl=1" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul class="list-group">
                <li class="list-group-item">
                  <h4><i class="fas fa-user-plus"></i><span>Turn more website visits into bookings</span></h4>
                  <p>
                    Your new calendar is so irresistible it turns your website
                    into a booking machine.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4><i class="fas fa-wallet"></i><span>Get bookings directly from Facebook and Google</span></h4>
                  <p>
                    Your events automatically show up on Facebook and Google so
                    even more customers can find you.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>
                  <i class="fas fa-mail-bulk"></i><span>Drive more repeat bookings with built-in marketing tools</span>
                  </h4>
                  <p>
                    Automated emails and other marketing tools make customers
                    come back for more without you having to lift a finger.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4><i class="fas fa-clock"></i><span>Cut down your time spent on admin</span></h4>
                  <p>
                    Spend less time on the phone or with clunky tools and more
                    time with your growing customer base.
                  </p>
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
                  <a href="#" class="btn btn-success">
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
                  <a href="#" class="btn btn-success">
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
                  <a href="#" class="btn btn-success">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
