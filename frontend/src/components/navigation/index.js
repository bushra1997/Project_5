import React from "react";
import {Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      
        <ul>
          <li>
            <Link to="/Logo">Logo</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Sections">Sections</Link>
          </li>
        </ul>
     
    </>
  );
};

export default Navigation;
