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
    <div className="Nav">
      <ul>
        <li>
          <Link to="/Logo">Logo</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">places</Navbar.Brand>
          <Nav className="me-auhometo">
            <Nav.Link as={Link} to="/weddings">Weddings</Nav.Link>
            <Nav.Link as={Link} to="/birthDayParty">BirthDayParty</Nav.Link>
            <Nav.Link as={Link} to="/funerals">Funerals</Nav.Link>
            <Nav.Link as={Link} to="/dinnerParty">DinnerParty</Nav.Link>
            <Nav.Link as={Link} to="/meeting">Meeting</Nav.Link>
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
    </div>
  );
};

export default Navigation;
