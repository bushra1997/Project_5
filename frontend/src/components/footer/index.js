import React from "react";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h5 className="title">Contact us</h5>
            <p>Street, Building 55, 6th Floor</p>
            <span>+962 (6)4321432</span> <br />
            <span>+962 (79)1111321</span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h5>Our Vision</h5>
            <p>lorem</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h5>Follow us</h5>
            <div className="container">
              <ul>
                <li><a><i class="fab fa-facebook-square"></i></a></li>
                <li><a><i class="fab fa-instagram-square"></i></a></li>
                <li><a><i class="fab fa-pinterest-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <div className="footer">
    //   <MDBFooter color="blue" className="font-small pt-4 mt-4">
    //     <MDBContainer fluid className="text-center text-md-left">
    //       <MDBRow>
    //         <MDBCol md="4">
    //           <h5 className="title">Contant as</h5>
    //           <p>Street, Bulding 55, 6th Floor</p>
    //           <span>+962 (6)4321432</span> <br />
    //           <span>+962 (79)1111321</span>
    //         </MDBCol>
    //         <MDBCol md="4">
    //           <h5 className="title">our vision</h5>
    //           <ul>
    //             <li className="list-unstyled">
    //               <a href="time">Weekdays 10am – 5pm</a>
    //             </li>
    //             <li className="list-unstyled">
    //               <a href="special occasions">special occasions</a>
    //             </li>
    //             <li className="list-unstyled">
    //               <a href="location">Site map</a>
    //             </li>
    //           </ul>
    //         </MDBCol>

    //         <MDBCol md="4">
    //           <h6>Follow us</h6>

    //           <div className="socialIcons">
    //             <span>
    //               <a href="">
    //                 <i className="fab fa-twitter"></i>
    //               </a>
    //             </span>
    //             <span>
    //               <a href="">
    //                 <i className="fab fa-linkedin-in"></i>
    //               </a>
    //             </span>
    //             <span>
    //               <a href="">
    //                 <i className="fab fa-facebook-f"></i>
    //               </a>
    //             </span>
    //           </div>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //     <div className="footer-copyright text-center py-3">
    //       <MDBContainer fluid>
    //         &copy; {new Date().getFullYear()} Copyright:{" "}
    //         <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
    //       </MDBContainer>
    //     </div>
    //   </MDBFooter>
    // </div>
  );
};

export default FooterPage;
