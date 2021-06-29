import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <div className="footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Contant as</h5>
              <p>Street, Bulding 55, 6th Floor</p>
              <span>+962 (6)4321432</span> <br />
              <span>+962 (79)1111321</span>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">our vision</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="time">Weekdays 10am – 5pm</a>
                </li>
                <li className="list-unstyled">
                  <a href="special occasions">special occasions</a>
                </li>
                <li className="list-unstyled">
                  <a href="location">Site map</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md="4">
              <h6>Follow us</h6>

              <div className="socialIcons">
                <span>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </span>
                <span>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </span>
              </div>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
