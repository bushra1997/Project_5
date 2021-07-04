import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./favorite.css";
//working on this
export default function Favorite() {
  const [favorateCard, setFavorateCard] = useState("")
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  useEffect(() => {
    axios.get(`http://localhost:5000/favorite/${token.user.id}`)
    .then((result)=>{
      setFavorateCard(result.data)
    })
    .catch((err)=>{
      console.log(err.message);
    })
  }, [])
  
  console.log("aaaaaaaaaaaaa",favorateCard);
  return (
    
    <div className="favorite-container">
    {favorateCard
    &&favorateCard.map((e,i)=>{
      return (
        <>
         <div key={i} className="favorate-card"><img src={e.img} style={{width:"100%"}}></img></div>

        </>
        )
      })}

    </div>
    
  );
}
