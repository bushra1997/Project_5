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
            setRes(result.data)
            console.log("akakkakakaka",result.data);
            console.log("oooooooooooooooooooo",res[0]);

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
