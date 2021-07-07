import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./showPlaces.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12">
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
        </div>
      </>
      // <Card style={{ width: "18rem" }}>
      //   <Card.Img variant="top" src={place.img} />
      //   <Card.Body>
      //     <Card.Title>{place.name}</Card.Title>
      //     <Card.Text>{place.description}</Card.Text>
      //   </Card.Body>
      //   <ListGroup className="list-group-flush">
      //     <ListGroupItem>capacity: {place.capacity}</ListGroupItem>
      //     <ListGroupItem>city: {place.city}</ListGroupItem>
      //     <ListGroupItem>address: {place.address}</ListGroupItem>
      //     <ListGroupItem>availability: {place.availability}</ListGroupItem>
      //   </ListGroup>
      // </Card>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
      <Link to={`/places/${place.type}/${place.place_id}`}>
        <div key={place.id}>
          <ShowCard place={place} />
        </div>
      </Link>
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
