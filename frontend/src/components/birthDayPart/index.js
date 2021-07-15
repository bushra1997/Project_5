import React, { useState, useEffect } from "react";
import axios from "axios";
import "./birthDayPart.css";
import ShowPlaces from "../showPlaces";
const BirthDayParty = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/type/birthDayParty`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      });
  }, []);

  return (
    <>
      <div className="funeralsPlace">
        <ShowPlaces places={places} />
      </div>{" "}
    </>
  );
};

export default BirthDayParty;
