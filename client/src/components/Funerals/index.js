import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./funerals.css";
import ShowPlaces from "../showPlaces/index";

const Funerals = () => {
  
  const history = useHistory();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get(`/places/type/funerals`)
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
      </div>
    </>
  );
};

export default Funerals;
