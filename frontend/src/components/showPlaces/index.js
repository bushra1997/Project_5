import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={place.img} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>capacity: {place.capacity}</ListGroupItem>
          <ListGroupItem>city: {place.city}</ListGroupItem>
          <ListGroupItem>address: {place.address}</ListGroupItem>
          <ListGroupItem>availability: {place.availability}</ListGroupItem>
        </ListGroup>
      </Card>
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
      <div className="places">{showPlaces()}</div>
    </>
  );
};

export default ShowPlaces;
