import React, { useState, useEffect } from "react";
import axios from "axios";
import "./meeting.css";
import ShowPlaces from "../showPlaces";

const Meeting = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/type/meeting`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="funeralsPlace">
        <ShowPlaces places={places} />
      </div>
    </>
  );
};

export default Meeting;
