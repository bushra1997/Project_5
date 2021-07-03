import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import Hamburger from "hamburger-react";
import {Link} from "react-router-dom";
import "./navigation.css";
import { useDispatch } from "react-redux";
import {setTokenout} from "./../../reducers/signout/signout"


const NavBar = (props) => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);

  
  const jad = () => {
    if (!collapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  const signOut=()=>{

    dispatch(setTokenout({ token: "", user: {} }));
    
  };

  return (
    <>
    <div>
      <Navbar color="faded" light>
        <NavbarBrand onClick={jad} className="mr-auto">
          <Hamburger
            size={20}
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
              <Link onClick={signOut} exact to="/login">
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
