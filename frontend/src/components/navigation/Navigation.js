import React, { useState, useEffect } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Search from "./../search/search";
import { useDispatch, useSelector } from "react-redux";
import { setOut } from "../../reducers/login/index";

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  const image = useSelector((state) => {
    return {
      image: state.profilePictuer.image,
    };
  });
  const exist = token.token;

  const signOut = () => {
    dispatch(setOut({ token: "", user: {} }));
    localStorage.setItem("token", "");
    localStorage.setItem("role", {});
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-white "
        style={{ backgroundColor: "#FBF7F0" }}
      >
        <Link className="navbar-brand" to="/">
          <img src="https://www.getoccasion.com/wp-content/uploads/2016/01/Occasion-Logo-Black_Web1.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" style={{ color: "#000" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Occasions
              </a>
              <div
                className="dropdown-menu dropdown-menu-right text-left"
                aria-labelledby="navbarDropdown"
              >
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
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            {token.user.role_type === "Admin" ? (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : null}

            {exist ? (
              <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>
                    <img
                      className="style-scope yt-img-shadow"
                      src={image.image}
                      style={{
                        borderRadius: "50%",
                        height: "32px",
                        width: "32px",
                      }}
                      alt={`${token.user.firstName} ${token.user.lastName}`}
                    />
                  </span>
                </a>
                <div
                  className="dropdown-menu this-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                  style={{
                    margin: "auto",
                    justifyContent: "space-around",
                    borderRadius: "10px",
                  }}
                >
                  <p className="signed">Signed in as</p>
                  <p
                    style={{
                      borderBottom: "1px solid ",
                      justifyContent: "space-around",
                      color: "white",
                    }}
                    className="userData"
                  >
                    
                    <br />
                    <span
                      style={{ fontWeight: "bold", color: "white" }}
                    >{`${token.user.firstName} ${token.user.lastName}`}</span>
                  </p>
                  <li className="nav-item">
                    <Link
                      onClick={signOut}
                      to="/login"
                      className="nav-link"
                      style={{ color: "#fff" }}
                    >
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className="nav-link"
                      style={{ color: "#fff" }}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/favorite"
                      className="nav-link"
                      style={{ color: "#fff" }}
                    >
                      My favorite
                    </Link>
                  </li>
                </div>
              </li>
            ) : (
              <li
                className="nav-item"
                style={{ listStyle: "none" }}
                style={{ color: "#fff" }}
              >
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
