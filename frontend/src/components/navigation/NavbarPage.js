import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Hamburger from "hamburger-react";
import { Route, Link, useHistory } from "react-router-dom";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  
  const jad = () => {
    if (!collapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  return (
    <>
    <div>
      <Navbar color="faded" light>
        <NavbarBrand onClick={jad} className="mr-auto">
          <Hamburger
            size={35}
            duration={0.6}
            hideOutline={false}
            easing="ease-in"
          />
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link exact to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link exact to="/login">
                Login
              </Link>
            </NavItem>
            <NavItem>
              <Link exact to="/profile">
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link exact to="/login">
                Signout
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
     
    </>
  );
};

export default NavBar;
