import React, { useState } from "react";
import "./navigation.css";
import NavBar from "./NavbarPage";

import { Route, Link, useHistory } from "react-router-dom";



const Navigation = () => {
  return (
    <>
    <div className="Nav">
      <div className="header"><Link exact to="/home">Ocassions App</Link></div>
      <div className="header1"><NavBar/></div>
    </div>
    <div>
      <Link to="/weddings">Weddings</Link>
      <Link to="/birthDayParty">BirthDayParty </Link>
      <Link to="/funerals">Funerals </Link>
      <Link to="/dinnerParty">DinnerParty</Link>
      <Link to="/meeting">Meeting</Link>
      </div>
    </>
  );
};

export default Navigation;




 