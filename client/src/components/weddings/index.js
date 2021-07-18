import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowPlaces from "../showPlaces";

const Weddings = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get(`/places/type/weddings`)
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

export default Weddings;
