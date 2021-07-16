import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ShowPlaces from "../showPlaces/index";

export default function SearchResult() {
  const [res, setRes] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/place/name/${name}`)
      .then((result) => {
        setRes(result.data);
      })
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ShowPlaces places={res} />
      </div>
    </div>
  );
}
