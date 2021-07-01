import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./home.css"

export default function Index() {
  const token = localStorage.getItem("token");
  console.log("aaaaaaaaaaaaaaazzzzzzzzzzzzz",token);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/img`)
      .then((result) => {
        if (result.status == 200) {
          setImages(result.data);
          console.log("aaaaaaaaaaaaaaaaaa", result.data);
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <Carousel fade>
      {images &&
        images.map((e, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={e.img}
                alt="First slide"
              />
              {console.log("jjjjjjj", e)}
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}
