import React, { useState,useEffect } from "react";
import "./navigation.css";
import { Link} from "react-router-dom";
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
  
  const exist =token.token;
    
    
  const signOut = () => {
    dispatch(setOut({ token: "", user: {} }));
    localStorage.setItem("token", "");
    localStorage.setItem("role", {});
  };
  

  console.log(token.user);
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
        <Search />
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link exact to="/" className="nav-link">
              Home
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
            <Link exact to="/" className="nav-link">
              About us
            </Link>
          </li>
        </ul>
       {exist?( <li class="nav-item dropdown" style={{ listStyle: "none" }}>
          <a
            class="nav-link dropdown-toggle"
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
                src="https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fit/w_936%2Ch_733%2Cal_c/file.png"
                style={{ borderRadius: "50%", height: "32px", width: "32px" }} alt="Avatar image"
              />
            </span>
          </a>
          <div class="dropdown-menu this-menu" aria-labelledby="navbarDropdown" style={{margin:"auto",justifyContent:"space-around",borderRadius:"10px"}} >
            <p style={{borderBottom:"1px solid black",justifyContent:"space-around"}}>Signed in as<br/><span style={{fontWeight:"bold"}}>{`${token.user.firstName} ${token.user.lastName}` }</span></p>
            <li class="nav-item">
              <Link onClick={signOut} exact to="/login" className="nav-link">
                logout
              </Link>
            </li>

            <li class="nav-item">
              <Link exact to="/profile" className="nav-link">
                My Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link exact to="/favorite" className="nav-link">
                My favorite
              </Link>
            </li>
          </div>
        </li>):( 
        <li class="nav-item" style={{ listStyle: "none" }}>
              <Link exact to="/login" className="nav-link">
                Login
              </Link>
            </li>)}
      </nav>
    </>
  );
};

export default Navigation;
