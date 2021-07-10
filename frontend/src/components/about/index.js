import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div>
        <h1>About Us:</h1>
        <ul>
          <li className="li_about">What is occasion website ?</li>
          <p className="paragraphAbout-center">
            Our website distinguished by providing you with service and
            providing opportunities to get what you want from the luxury, to
            provide is through inclusive activities and services.
          </p>
          <li className="li_about">What matters to we ?</li>
          <p className="paragraphAbout-center">We care about comfort, credibility and customer opinion</p>
          <li className="li_about">What we do ?</li>
          <p className="paragraphAbout-center">Facilitating the customer to find the right place according to his desire</p>
          <li>How we do it ?</li>
          <p className="paragraphAbout-center">Through the link between the client and the places of events, they are linked through us through the user and communication with the owner of the place</p>
        </ul>
      </div>
    </div>
  );
};

export default About;
