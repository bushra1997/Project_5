import axios from 'axios'
import React, { useState, useEffect } from "react";
import {Link, useParams, useHistory } from "react-router-dom";


export default function SearchResult() {
    const { name } = useParams();
    const history = useHistory();

    useEffect(() => {
     
        axios.get(`http://localhost:5000/place/name/${name}`)
        .then((result)=>{
            console.log(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }, [])

    return (
       <div>
           HEEEEEEEELO
       </div>
        
    )
}
