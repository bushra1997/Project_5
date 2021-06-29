import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
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
      {images &&
        images.map((e, i) => {
          return (
            <Card key={i}>
              <Card.Img variant="top" src={e.img} style={{ height: "200px" }} />
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
    </>
  );
};
export default Weddings;
