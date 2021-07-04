import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function Favorite() {
  const [favorateCard, setFavorateCard] = useState([])
  const [id, setId] = useState("");

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  
  useEffect(() => {
    setId(token.user.id);
    axios.get(`http://localhost:5000/favorite/${id}`)
    .then((result)=>{
      setFavorateCard(result.data)
    })
  }, [])
 
  console.log(id);
  
  
  return (
    
    <div className="favorite-container">
    {favorateCard.map((e,i)=>{

      return (
        <>
         <div key={i} className="favorate-card">jad</div>

        </>
        )
      })}

    </div>
    
  );
}
