import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css"

const FooterPage = () => {
  return (
	  <div className="footer">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Content as</h5>
            <p>
			Street, Bulding 55, 6th Floor
            </p>
			
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">our vision</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
            </ul>
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
}

export default FooterPage;
