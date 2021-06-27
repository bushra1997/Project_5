import React from "react";
import {Route,Link } from "react-router-dom";
import Sections from "../sections/index";

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
          

        </ul>
		<select name="places" id="places">
        <option Weddings="volvo">Weddings</option>
        <option BirthDayParty="saab">BirthDayParty</option>
        <option Funerals="opel">Funerals</option>
        <option DinnerParty="audi">DinnerParty</option>
        <option Meeting="audi">Meeting</option>
      </select>

		
          
    </>
  );
};

export default Navigation;
{/* <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
