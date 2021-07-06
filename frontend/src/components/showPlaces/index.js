import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./showPlaces.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <div className="row">
      <div className="showPlaces_" >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={place.img} />
        <div className="bodyShowPlaces">
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <div className="description">
          <Card.Text>{place.description}</Card.Text>
          </div>
        </Card.Body>
        </div>
        <div className="group">
        <ListGroup className="list-group-flush">
          <ListGroupItem>capacity: {place.capacity}</ListGroupItem>
          <ListGroupItem>city: {place.city}</ListGroupItem>
          <ListGroupItem>address: {place.address}</ListGroupItem>
          <ListGroupItem>availability: {place.availability}</ListGroupItem>
        </ListGroup>
        </div>
      </Card>
      </div>
      </div>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
  
      <Link to={`/places/${place.type}/${place.place_id}`}>
        <div key={place.id} className="place-card">
          <ShowCard place={place} />
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div className="places">{showPlaces()}</div>
    </>
  );
};

export default ShowPlaces;
