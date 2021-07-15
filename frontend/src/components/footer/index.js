import React from "react";
import "./footer.css";
import { Route, Link, useHistory } from "react-router-dom";
const FooterPage = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="container text-center">
              <ul class="list-group">
                <li>
                  <h5 className="title">Contact us</h5>
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <span>+962 (6)4321432</span>
                </li>
                <li>
                  <i class="fas fa-envelope-open-text"></i>
                  <span>fsd@occasion.co</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 text-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="container">
              <Link className="navbar-brand" exact to="/">
                <img src="https://www.getoccasion.com/wp-content/uploads/2016/01/Occasion-Logo-Black_Web1.png" />
              </Link>
              <p>
                Occasion is the world leader in online occasions booking and
                related services.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12  text-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="container">
              <div className="container">
                <h5>Follow us</h5>
              </div>
              <div className="container">
                <ul>
                  <li>
                    <a>
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
