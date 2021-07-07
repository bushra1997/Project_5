import axios from 'axios'
import React, { useState, useEffect } from "react";
import {Link, useParams, useHistory } from "react-router-dom";
import ShowPlaces from "../sh";


export default function SearchResult() {
    const [res, setRes] = useState([])
    const { name } = useParams();
    const history = useHistory();

    useEffect(() => {
     
        axios.get(`http://localhost:5000/place/name/${name}`)
        .then((result)=>{
            console.log(result.data);
            setRes(result.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }, [])

    const showResults = () => {
        return res.map((e,i) => (
          <Link to={`/places/${e.type}/${e.place_id}`}>
            <div key={e.id} className="place-card">
              <ShowCard e={e} />
            </div>
          </Link>
        ));
      };

    return (
       
        <div>{showResults}</div>
    )
}
