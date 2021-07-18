import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ShowPlaces from "../showPlaces/index";

export default function SearchResult() {
  const [res, setRes] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`/place/name/${name}`)
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
