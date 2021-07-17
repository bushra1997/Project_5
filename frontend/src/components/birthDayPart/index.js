import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowPlaces from "../showPlaces";
const BirthDayParty = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/places/type/birthDayParty`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      });
  }, []);

  return (
    <>
      <div className="weddingsPlace">
        <ShowPlaces places={places} />
      </div>
    </>
  );
};

export default BirthDayParty;
