import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./birthDayPart.css"

const BirthDayParty = () => {
  const [places, setPlaces] = useState([]);

  const ShowCard = ({ place }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={place.img} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{place.capacity}</ListGroupItem>
          <ListGroupItem>{place.city}</ListGroupItem>
          <ListGroupItem>{place.address}</ListGroupItem>
          <ListGroupItem>{place.availability}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
      <div key={place.id}>
        <ShowCard place={place} />
      </div>
    ));
  };

  useEffect(() => {
    axios
      .post(`http://localhost:5000/places/birthDayParty`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <>
    <div className="places">
      {showPlaces()}
      </div>
    </>
  );
};

export default BirthDayParty;

