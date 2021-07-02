import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { setToken } from "./../../reducers/login/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./place.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
export default function Place() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [capasity, setCapacity] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();
  const [place_id, setPlace_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [rating_id, setRating_id] = useState("");
  const [added, setAdded] = useState(false);
  
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  useEffect(() => {
    setUser_id(token.user.id);
    setRating_id("1");
    setPlace_id(id);
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        setImage(result.data[0].img);
        setDescription(result.data[0].description);
        setName(result.data[0].name);
        setCapacity(result.data[0].capacity)
        setCity(result.data[0].city)
        setAddress(result.data[0].address)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const check = () => {
    let place_ide = 3;
    let user_ide = 19;
    axios
      .get("http://localhost:5000/favorite/check", { place_ide, user_ide })
      .then((result) => {
        console.log("rrrrrrrrrrrrrrrrrrrr", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToFavorite = () => {
    check();
    axios
      .post("http://localhost:5000/favorite", { place_id, user_id, rating_id })
      .then((result) => {
        console.log(result);
        setAdded(true);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFavorite = () => {
    axios
      .delete(`http://localhost:5000/favorite/${place_id}`, {
        place_id,
      })
      .then((result) => {
        console.log(result);
        setAdded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-place">
      <div className="place-holder">
        <Card style={{ width: "41rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title><h2>{name}</h2></Card.Title>
            <Card.Text><h4>{description}</h4></Card.Text>
            <Card.Text><h4>Capacity: {capasity}</h4> </Card.Text>
            <Card.Text><h4>City: {city}</h4> </Card.Text>
            <Card.Text><h4>Address: {address}</h4> </Card.Text>
            {!added ? (
          <AiOutlineHeart
            className="icon-heart"
            icon="heart"
            id="add-favorite"
            size={40} 
            color="red"
            onClick={addToFavorite}
          />
        ) : (
          <AiFillHeart
            icon="heart"
            id="delete-fav"
            size={40} 
            color="red"
            onClick={deleteFavorite}
          />
        )}
          </Card.Body>
        </Card>
      </div>
      <div className="buttons-holder">
       
      </div>
    </div>
  );
}

// {!notAdded ? (
//   <Button variant="primary" onClick={deleteFavorite}>Delete from favorite</Button>
// ) : (
//   <Button variant="primary" onClick={addToFavorite}>Add to favorite</Button>
// )}

// {!added ? (
//   <Button variant="primary" onClick={addToFavorite}>Add to favorite</Button>
// ) : (
//   <Button variant="primary" onClick={deleteFavorite}>Delete from favorite</Button>
// )}
//       <Button variant="primary">Book now</Button>
