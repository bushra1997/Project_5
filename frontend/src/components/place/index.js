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
  const [added, setAdded] = useState(false);
  const [found, setFound] = useState(false);
  const [averageRate, setAverageRate] = useState("")
  const history = useHistory();
  
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  useEffect(() => {
    if (token.token) {
      setFound(true);
    } else {
      setFound(false);
    }
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
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    let user_id = token.user.id;
    let place_id = id;
    axios
      .post("http://localhost:5000/check", { place_id, user_id })
      .then((result) => {
        console.log("IIID", id);
        console.log("This is DATAAAAa", result.data[0].place_id === id);
        if (!result.data[0].place_id === id) {
          setAdded(false);
        } else {
          setAdded(true);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);



  ///////////////////////////////////////////////////////////////////////////////////////////////////////
 

  
  useEffect(() => {
    
    axios
      .get(`http://localhost:5000/rating/${id}`)
      .then((result) => {
        console.log(id,"place_id");
        console.log(result,"result");
        console.log("ratuing",result.data[0]);
        setAverageRate(result.data[0].Average_rating)
        // if (result.status == 200) {
        //   setPlaces(result.data);
        // }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const addToFavorite = () => {
    axios
      .post("http://localhost:5000/favorite", { place_id, user_id})
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
    if (found) {
      history.push(`/booking/${id}`);
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ padding: "2.5% 0%" }}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="image">
            <img
              style={{ borderRadius: "10px", width: "440px" }}
              src={image}
              alt="..."
            />
            {found ? <Rating className="rating" /> : null}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="container">
            <ul class="list-group">
              <div className="font-weight-bolder">
                <li class="list-group-item"> {name}</li>
              </div>
              <li class="list-group-item">
                <i class="fas fa-comment-alt"></i>
                {description}
              </li>
              <li class="list-group-item">
                <i class="fas fa-users"></i> {capasity}
              </li>
              <li class="list-group-item">
                {" "}
                <i class="fas fa-map-pin"></i>
                {address}
              </li>
            </ul>
            {found ? (
              <div className="rating-fav">
                {!added ? (
                  <AiOutlineHeart
                    className="icon-heart"
                    icon="heart"
                    id="add-favorite"
                    size={40}
                    color="#cf6262"
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
            ) : null}
            <button className="btn btn-primary btn-lg btn-block" onClick={booking}>
              Book
            </button>
           
            {/* <div >{averageRating()}</div> */}
            <div>{averageRate}</div>
              
            </div>

          </div>
        </div>
      </div>
   
  );
}
