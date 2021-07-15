import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import profile from "./profile.css";
import ShowPlaces from "../showPlaces";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import ModalBody from "react-bootstrap/ModalBody";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "./../../reducers/Profile/index";

const Profile = () => {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(false);
  const [avataUrl, setAvataUrl] = useState(
    "https://image.freepik.com/free-vector/young-man-avatar-character_24877-9475.jpg"
  );
  const [smShow, setSmShow] = useState(false);

  const avatar1 =
    "https://image.freepik.com/free-vector/young-man-avatar-character_24877-9475.jpg";
  const avatar2 =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  const avatar3 = "https://www.w3schools.com/howto/img_avatar2.png";
  const avatar4 =
    "https://images.assetsdelivery.com/compings_v2/moremar/moremar1905/moremar190500011.jpg";
  const avatar5 =
    "https://www.ikea.com/jo/en/images/products/smycka-artificial-flower-gerbera-pink__0903344_pe685480_s5.jpg?f=s";
  const avatar6 =
    "https://cdn5.vectorstock.com/i/thumb-large/64/89/african-american-woman-avatar-on-red-vector-31326489.jpg";

  const [favorateCard, setFavorateCard] = useState([]);

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  axios
    .get(`http://localhost:5000/favorite/${token.user.id}`)
    .then((result) => {
      setFavorateCard(result.data);
    });
  const editProfile = () => {
    //here will add an axios router to update any user requested info
  };

  const ChooseAvatar = () => {
    setAvatar(true);
    setSmShow(true);
  };

  const getAvatar = (url) => {
    dispatch(setImage(url));
    setAvataUrl(url);
  };

  return (
    <>
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src={avataUrl}
                  alt="profile-avatar "
                  style={{ height: "156px" }}
                />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input style={{ cursor: "pointer" }} onClick={ChooseAvatar} />
                  {avatar ? (
                    <Modal
                      size="sm"
                      show={smShow}
                      onHide={() => setSmShow(false)}
                      aria-labelledby="example-modal-sizes-title-sm"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                          Choose an Avatar
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="show-grid">
                        <Container>
                          <Row>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar1}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  marginBottom: "10px",
                                  border: "1px solid",
                                  borderRadius: "0px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar1);
                                }}
                              />
                            </Col>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar2}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar2);
                                }}
                              />
                            </Col>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar3}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar3);
                                }}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar4}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar4);
                                }}
                              />
                            </Col>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar5}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar5);
                                }}
                              />
                            </Col>
                            <Col xs={6} md={4}>
                              <img
                                src={avatar6}
                                alt="profile-avatar "
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  getAvatar(avatar6);
                                }}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  ) : null}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{`${token.user.firstName} ${token.user.lastName}`}</h5>
                <h6 style={{ display: "none" }}>Web Developer and Designer</h6>
                <p class="proile-rating" style={{ display: "none" }}>
                  RANKINGS : <span>8/10</span>
                </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      My Favorite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <input
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
                onClick={editProfile}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work" style={{ display: "none" }}>
                <p>WORK LINK</p>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>{`${token.user.firstName}-${token.user.id}`}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{`${token.user.firstName} ${token.user.lastName}`}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{token.user.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Age</label>
                    </div>
                    <div class="col-md-6">
                      <p>{token.user.age}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Country</label>
                    </div>
                    <div class="col-md-6">
                      <p>{token.user.country}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ShowPlaces places={favorateCard} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
