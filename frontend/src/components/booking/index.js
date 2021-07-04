import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./booking.css";
import Place from "../place/index";

const Booking = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${id}`)
      console.log("lllll",id)
      .then((result) => {
        if (result.status == 200) {
          setPlace(result.data[0]);
          console.log(";llllllllllllllllll",result.data[0]);
          // console.log(place[0],"mmmmmmmmmmmmmmm")
          
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const clickBooking = () => {
    return <div>Successfully booked</div>;
  };

//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{place[0].name}</Card.Title>
//         <Card.Text>address: {place[0].address}</Card.Text>

//         <Card.Text>city: {place[0].city}</Card.Text>
//         <button onClick={clickBooking}>confirmation</button>
//       </Card.Body>
//     </Card>
//   );
};
export default Booking;

// Card style={{ width: "18rem" }}>
//   <Card.Img variant="top" src={place1.img} />
//   <Card.Body>
//     <Card.Title>{place1.name}</Card.Title>
//     <Card.Text>{place1.description}</Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>capacity: {place1.capacity}</ListGroupItem>
//     <ListGroupItem>city: {place1.city}</ListGroupItem>
//     <ListGroupItem>address: {place1.address}</ListGroupItem>
//     {/* <ListGroupItem>availability: {place.availability}</ListGroupItem> */}
//   </ListGroup>
// </Card>

// <button>confirmation</button>
