import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./dinnerParty.css";
import ShowPlaces from "../showPlaces/index";

const DinnerParty = () => {
  const history = useHistory();
  const [places, setPlaces] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/places/type/dinnerParty`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      })
  }, []);

  return (
    <>
      <div className="dinnerPartyPlace">
        <ShowPlaces places={places} />
      </div>
    </>
  );
};

export default DinnerParty;
