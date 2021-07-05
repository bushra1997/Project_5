import React, { useState } from "react";
import "./navigation.css";
import NavBar from "./NavbarPage";

import { Route, Link, useHistory } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* <div className="Nav">
        <div className="header">
          <Link className="logo-link" exact to="/home">
            Occasions App
          </Link>
        </div>
        <div className="header1">
          <NavBar />
        </div>
      </div>
      <div class="container">
        <Link class="btn btn-1" to="/weddings">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Weddings
        </Link>
        <Link class="btn btn-1" to="/birthDayParty">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          BD Party
        </Link>
        <Link class="btn btn-1" to="/funerals">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Funerals{" "}
        </Link>
        <Link class="btn btn-1" to="/dinnerParty">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Dinner Party
        </Link>
        <Link class="btn btn-1" to="/meeting">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Meeting
        </Link>
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" exact to="/">
          <img src="https://www.getoccasion.com/wp-content/uploads/2016/01/Occasion-Logo-Black_Web1.png"/>
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
              <Link exact to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link exact to="/" className="nav-link">About us</Link>
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
              <Link exact to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
