import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./place.css";
import Rating from "./Raiting"
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
  const [rating_id, setRating_id] = useState("2");
  const [added, setAdded] = useState(false);
  const history = useHistory()

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  useEffect(() => {
    setUser_id(token.user.id);
    setPlace_id(id);
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        setImage(result.data[0].img);
        setDescription(result.data[0].description);
        setName(result.data[0].name);
        setCapacity(result.data[0].capacity);
        setCity(result.data[0].city);
        setAddress(result.data[0].address);
        
        console.log("this is the token =>",token);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  const addToFavorite = () => {
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

  const booking = () =>{
    history.push(`/booking/${id}`)
  }

  return (
    <div className="main-place">
      <div className="place-holder">
        <Card style={{ width: "41rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            <Card.Text>
              <h6>{description}</h6>
            </Card.Text>
            <Card.Text>
              <h6>Capacity: {capasity}</h6>{" "}
            </Card.Text>
            <Card.Text>
              <h6>City: {city}</h6>{" "}
            </Card.Text>
            <Card.Text>
              <h6>Address: {address}</h6>{" "}
            </Card.Text>
            <div>
              <Rating/>
            <button onClick={booking}>Book</button>
            {!added ? (
              <AiOutlineHeart
                className="icon-heart"
                icon="heart"
                id="add-favorite"
                size={40}
                color="red"
                
                en    
                onClick={addToFavorite}
              />
            ) : (
              <AiFillHeart
                icon="heart"
                id="delete-fav"
                size={40}
                color="red"
                en
                onClick={deleteFavorite}
              />
            )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="buttons-holder"></div>
    </div>
  );
}
