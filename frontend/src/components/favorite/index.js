import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShowPlaces from "../showPlaces";
import "./favorite.css";


export default function Favorite() {
  const [favorateCard, setFavorateCard] = useState([]);
  

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/favorite/${token.user.id}`)
      .then((result) => {
        setFavorateCard(result.data);
        console.log(result.data,"iiiiiiiiiiiiii");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="weddingsPlace">
        <ShowPlaces places={favorateCard} />
      </div>
    </>
    
  );
}
