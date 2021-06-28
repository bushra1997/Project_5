import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, Button, FormControl,Navbar,Nav,Container } from "react-bootstrap";
import "./navigation.css" 
const Navigation = () => {
  const [search, setSearch] = useState(false);
 
//   const MoveToWeddings = () => {
// 	console.log("ppppp")
//    // useHistory.push("/Logo");
//  };
//   const moveToBirthDayParty = () => {
//     useHistory.push("/BirthDayParty");
//   };
//   const moveToFunerals = () => {
//     useHistory.push("/Funerals");
//   };
//   const moveToDinnerParty = () => {
//     useHistory.push("/DinnerParty");
//   };
//   const moveToMeeting = () => {
//     useHistory.push("/Meeting");
//   };

  const searchClick = () => {};

  return (
    <>
      <ul>
        <li>
          <Link to="/Logo">Logo</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      {/* <Route path="/weddings" render={()=><Navigation func={ moveToWeddings}/>}/> */}
      {/* <Route path="/weddings" component={MoveToWeddings}/> */}




	  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">places</Navbar.Brand>
    <Nav className="me-auhometo">
      <Nav.Link href="Weddings">Weddings</Nav.Link>
      <Nav.Link href="BirthDayParty">BirthDayParty</Nav.Link>
      <Nav.Link href="Funerals">Funerals</Nav.Link>
      <Nav.Link href="DinnerParty">DinnerParty</Nav.Link>
      <Nav.Link href="Meeting">Meeting</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  







      

      <div className="search">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="warning" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default Navigation;
