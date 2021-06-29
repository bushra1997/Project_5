import React, { useState,useEffect } from "react";
import Hamburger from "hamburger-react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
const Weddings = () => {
  const [isOpen, setOpen] = useState(false);


  useEffect(() => {

    axios.post(`http://localhost:5000/places/weddings`)
    .then((result) => {
      if (result.status == 200) {
        console.log(result.data);
        
      }
    })
    .catch((err) => {
      
    });
    
  },[])

  return (
    <>
      <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="holder.js/100px180" />
  </Card>
    </>
  );
};
export default Weddings;
