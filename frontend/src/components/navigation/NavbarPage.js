import React, { useState } from "react";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { useDispatch,useSelector } from "react-redux";


const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  const exist = token.token;
  setOut


  const [collapsed, setCollapsed] = useState(true);

  const NavIcon = () => {
    if (!collapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  const signOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
  };

  return (
    <>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand onClick={NavIcon} className="mr-auto">
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
             {!exist?<NavItem>
                <Link exact to="/login">
                  Login
                </Link>
              </NavItem>:
              <NavItem>
                <Link onClick={signOut} exact to="/login">
                  Signout
                </Link>
              </NavItem>}
              <NavItem>
                <Link exact to="/profile">
                  Profile
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
