import React from "react";
import { Link } from "react-router-dom";
import "./../showPlaces/showPlaces.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <>
        <div className="card">
          <div>
            <img src={place.img} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{place.name}</h5>

            <ul className="list-group">
              <li className="list-group-item card-text" className="description">
                <i className="fas fa-comment-alt"></i>
                {place.description}
              </li>
              <div className="address">
                <li className="list-group-item card-text">
                  <i className="fas fa-users"></i>
                  {place.capacity}
                </li>
                <li className="list-group-item card-text">
                  <i className="fas fa-map-pin"></i>
                  {place.address}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
        <Link to={`/places/${place.type}/${place.place_id}`}>
          <ShowCard place={place} key={place.id} />
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        <div className="row">{showPlaces()}</div>
      </div>
    </>
  );
};

export default ShowPlaces;
