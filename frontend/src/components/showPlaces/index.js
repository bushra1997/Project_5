import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./showPlaces.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <>
        <div className="card">
          <div>
            <img src={place.img} class="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 class="card-title">{place.name}</h5>
            <ul class="list-group">
              <li class="list-group-item card-text"><i class="fas fa-align-center"></i>{place.description}</li>
              <li class="list-group-item card-text">
                <i class="fas fa-users"></i>
                {place.capacity}
              </li>
              <li class="list-group-item card-text"><i class="fas fa-map-pin"></i>{place.address}</li>
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
