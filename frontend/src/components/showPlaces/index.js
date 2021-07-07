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
            <p class="card-text">{place.description}</p>
            <p class="card-text">{place.capacity}</p>
            <p class="card-text">{place.city}</p>
            <p class="card-text">{place.address}</p>
            <p class="card-text">{place.availability}</p>
          </div>
        </div>
      </>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <Link to={`/places/${place.type}/${place.place_id}`}>
          <div key={place.id} className="place-card">
            <ShowCard place={place} />
          </div>
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
