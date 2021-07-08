import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return <div className="container">
    <div >
      <img src="https://www.arabiaweddings.com/sites/default/files/styles/max750/public/tips/2016/01/amman_outdoor_venues.jpg?itok=x8aybcyp" className="rounded mx-auto d-block"></img>
    </div>
    <div >
      <p className="paragraphAbout-center" >Our website distinguished by providing you with service and providing opportunities to get what you want from the luxury, to provide is through inclusive activities and services. 
</p>
    </div>


  </div>
};

export default About;
