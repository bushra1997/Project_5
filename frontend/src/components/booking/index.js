import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./booking.css";
import ShowPlaces from "../showPlaces";

const Booking = () => {
    console.log("asma");
  const { id } = useParams();
  const [placeOne, setPlaceOne] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${id}`)
      console.log("lllll",id)
      .then((result) => {
        if (result.status == 200) {
            setPlaceOne(result.data[0]);
          console.log(";llllllllllllllllll",result.data[0]);
          // console.log(place[0],"mmmmmmmmmmmmmmm")
          
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
  <div> <ShowPlaces placeOne={placeOne} /></div>
  )

  
};
export default Booking;

