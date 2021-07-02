import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from 'react-redux';


export default function PlaceIndex() {

    const hasan = useSelector((state) => {
        return {
          token: state.token.token,
          user: state.token.user,
        };
      });
    
     
      const clicked =()=>{
    
        console.log("tiken====>",hasan.token);
      }
    return (
        <>
    
    <button onClick={clicked}>CLICK ME PLEASE </button>
    
        
        </>
    )
}
