import axios from 'axios'
import React, { useState, useEffect } from "react";
import {Link, useParams, useHistory } from "react-router-dom";
import ShowPlaces from "../showPlaces/index";


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

    return (
        <div className="container">
        <div className="row"><ShowPlaces places={res} /></div>
        </div>
    )
}
