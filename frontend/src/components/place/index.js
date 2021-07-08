import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./place.css";
import Rating from "./Raiting";
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
  const history = useHistory();

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

        console.log("this is the token =>", token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/favorite/check", { place_id, user_id })
      .then((result) => {
        console.log("IIID", id);
        console.log("This is DATAAAAa", result.data[0].place_id === id);
        if (result.data[0].place_id === id) {
          setAdded(false);
        } else {
          setAdded(true);
        }
      })

      .catch((err) => {
        console.log(err);
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

  const booking = () => {
    history.push(`/booking/${id}`);
  };

  return (
    <div className="container">
      <div className="row" style={{ padding: "2.5% 0%" }}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="image">
            <img style={{ borderRadius: "10px" }} src={image} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="container">
            <ul class="list-group">
              <li class="list-group-item"> {name}</li>
              <li class="list-group-item"><i class="fas fa-comment-alt"></i>{description}</li>
              <li class="list-group-item"><i class="fas fa-users"></i> {capasity}</li>
              <li class="list-group-item">  <i class="fas fa-map-pin"></i>{address}</li>
            </ul>
        <Rating />
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
        </div>
      </div>
    </div>
    
  );
}
