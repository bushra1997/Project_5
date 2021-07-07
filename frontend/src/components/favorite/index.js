import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./favorite.css";

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
    &&favorateCard.map((place,i)=>{
      return (
        <>
        {console.log(favorateCard,"oooo")}
         <div className="container">
         <div key={i} className="favorate-card"><img src={place.img} style={{width:"100%"}}></img></div>
         <div className="card-body">
         <h5 class="card-title">{place.name}</h5>
         </div>
         <ul class="list-group">
              <li class="list-group-item card-text" className="description">
                <i class="fas fa-comment-alt"></i>
                {place.description}
              </li>
              <div className="address">
                <li class="list-group-item card-text">
                  <i class="fas fa-users"></i>
                  {place.capacity}
                </li>
                <li class="list-group-item card-text">
                  <i class="fas fa-map-pin"></i>
                  {place.address}
                </li>
              </div>
            </ul>
         </div>
        </>
        )
      })}

    </div>
    
  );
}
