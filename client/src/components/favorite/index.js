import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ShowPlaces from "../showPlaces";

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
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/favorite/${token.user.id}`)
      .then((result) => {
        setFavorateCard(result.data);
      })
  }, []);
  return (
    <>
      <div className="weddingsPlace">
        <ShowPlaces places={favorateCard} />
      </div>
    </>
  );
}
