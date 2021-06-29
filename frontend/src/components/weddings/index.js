import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./wedding.css"
const Weddings = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/images/weddings`)
      .then((result) => {
        if (result.status == 200) {
          setImages(result.data);
        }
      })
      .catch((err) => {});
  }, []);
  console.log(images);

  return (
    <>
    <div className="cont">
      {images &&
        images.map((e, i) => {
          return (
            <Card key={i} >
              <Card.Img  src={e.img}  style={{width:"600px" ,height:"200px"}}/>
              <Card.Body>
                <Card.Text>
                  {e.description}

                  {e.city}

                  {e.address}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        </div>
    </>
  );
};
export default Weddings;
