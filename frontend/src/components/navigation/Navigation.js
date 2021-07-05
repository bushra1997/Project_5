import React, { useState } from "react";
import "./navigation.css";
import NavBar from "./NavbarPage";

import { Route, Link, useHistory } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-white fixed-top">
        <Link className="navbar-brand" exact to="/">
          <img src="https://www.getoccasion.com/wp-content/uploads/2016/01/Occasion-Logo-Black_Web1.png" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link exact to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link exact to="/" className="nav-link">
                About us
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Occasions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/weddings" className="dropdown-item">
                  Wedding
                </Link>
                <Link to="/birthDayParty" className="dropdown-item">
                  Birthday Party
                </Link>
                <Link to="/funerals" className="dropdown-item">
                  Funeral
                </Link>
                <Link to="/dinnerParty" className="dropdown-item">
                  Dinner Party
                </Link>
                <Link to="/meeting" className="dropdown-item">
                  Meeting
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link exact to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
