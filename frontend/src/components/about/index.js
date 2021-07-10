import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div className="aboutUs">
      <div className="div_about">
        <h2>About Us:</h2>
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
          <li className="li_about">How we do it ?</li>
          <p className="paragraphAbout-center">Through the link between the client and the places of events, they are linked through us through the user and communication with the owner of the place</p>
        </ul>
      </div>
      <div className="ourTeam">
        {/* <h2>Our team</h2> */}
        <div>
      <img src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512" style={{width:"200px",height:"150px",borderRadius:"5%"}}></img><span>Jadallah Zaitoon</span>

        </div>
        <div>
      <img src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512" style={{width:"200px",height:"150px",borderRadius:"5%"}}></img><span>Alaa saleh</span>
      </div>
      <div>
      <img src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512" style={{width:"200px",height:"150px",borderRadius:"5%"}}></img><span>Noof mohammed</span>
      </div>
      <div>
      <img src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512" style={{width:"200px",height:"150px",borderRadius:"5%"}}></img><span>Asma Alenazi</span>
      </div>
      <div>
      <img src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512" style={{width:"200px",height:"150px",borderRadius:"5%"}}></img><span>Bushra </span>
      </div>
      </div>
      </div>
    </div>
  );
};

export default About;
