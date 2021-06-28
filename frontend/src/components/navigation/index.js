import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import {
  InputGroup,
  Button,
  FormControl,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import "./navigation.css";
const Navigation = () => {
  const [search, setSearch] = useState(false);

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
            placeholder="Search for place"
            aria-label="Search for place"
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
