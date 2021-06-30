import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Place() {
  const { id } = useParams();
  const [place_id, setPlace_id] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        if (result.status == 200) {
          setPlace_id(result.data[0].id);
          setPlaces(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [places, setPlaces] = useState([]);

  const ShowPlace = ({ place }) => {
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

  const addToFav = () => {
    axios
      .post(`http://localhost:5000/favorite`, {
        place_id,
      })
      .then((result) => {
        result.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFromFav = () => {
    axios
      .delete(`http://localhost:5000/favorite/${place_id}`, {
        place_id,
      })
      .then((result) => {
        result.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showPlaces = () => {
    return places.map((place) => (
      <div key={place.id}>
        <ShowPlace place={place} />
        {console.log(places)}
      </div>
    ));
  };

  return (
    <>
      <div className="places">{showPlaces()}</div>
      <button onClick={addToFav}>Add To Favorite </button>
      <button onClick={deleteFromFav}>delete From Favorite </button>
    </>
  );
}
