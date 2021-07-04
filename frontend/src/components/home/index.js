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
    // <Carousel fade>
    //   {images &&
    //     images.map((e, i) => {
    //       return (
    //         <Carousel.Item>
    //           <img className="d-block w-100" src={e.img} alt="First slide" />
    //           <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>
    //               Nulla vitae elit libero, a pharetra augue mollis interdum.
    //             </p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       );
    //     })}
    // </Carousel>
    <>
      <section>
        <div className="container text-center">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            voluptates officia culpa magnam recusandae accusamus. Ut, voluptas
            velit quasi, dolorum excepturi incidunt animi veritatis corporis
            corrupti adipisci dolore. Cumque, necessitatibus.
          </p>
          <button className="btn btn-success">Read more</button>
        </div>
      </section>
      <section>
        <div className="container">
          <h1  className="text-center">Highlights</h1>
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
