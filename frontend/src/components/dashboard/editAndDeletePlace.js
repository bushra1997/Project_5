import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./dashboard.css";
export default function EditPlace() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/places/${number}`)
      .then((result) => {
        setName(result.data[0].name);
        setDescription(result.data[0].description);
        setImg(result.data[0].img);
        setCity(result.data[0].city);
        setAddress(result.data[0].address);
        setAvailability(result.data[0].availability);
        setCapacity(result.data[0].capacity);
      })
      .catch((err) => {});
  };
  const update = (e) => {
    setNumber("");
    e.preventDefault();
    axios
      .put(`http://localhost:5000/places/${number}`, {
        name,
        description,
        img,
        city,
        address,
        availability,
        capacity,
      })
      .then((result) => {
        console.log(result.data);
        setSmShow(true);
        setPopup1(true);
      })
      .catch((err) => {});
  };

  const Occasions = () => {
    axios
      .delete(`http://localhost:5000/occasions/delete/ocassions/${number}`)
      .then((res) => {})
      .catch((err) => {});
  };

  const favorite = () => {
    axios
      .delete(`http://localhost:5000/occasions/delete/favorite/${number}`)
      .then((res) => {})
      .catch((err) => {});
  };

  const rating = () => {
    axios
      .delete(`http://localhost:5000/occasions/delete/rating/${number}`)
      .then((res) => {})
      .catch((err) => {});
  };

  const deleteAll = (e) => {
    e.preventDefault();
    Occasions();
    setTimeout(favorite, 100);
    setTimeout(rating, 200);
  };

  const Delete = (e) => {
    setNumber("");

    setSmShow(true);
    setPopup(true);
    axios
      .delete(`http://localhost:5000/places/${number}`)
      .then((result) => {
        console.log(result.data);
        setNumber("");
        setName("");
        setDescription("");
        setImg("");
        setCity("");
        setAddress("");
        setAvailability("");
        setCapacity("");
      })

      .catch((err) => {});
  };
  const home = () => {
    history.push("/dashboard");
  };

  return (
    <div className="cccccc">
    <div className="main-div">
      <div className="search">
        <Form onSubmit={search}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Enter Number</Form.Label>
            <Form.Control
              as="input"
              value={number}
              placeholder="Input Number Id"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Form.Group>
          <div className="modify">
            <Button variant="primary" type="submit">
              Find
            </Button>
            <Button variant="primary" type="submit" onClick={deleteAll}>
              continue
            </Button>
          </div>
        </Form>
      </div>
      <div className="place-info">
        <Form onSubmit={update}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Name</Form.Label>
            <Form.Control
              as="input"
              placeholder={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Img</Form.Label>
            <Form.Control
              as="input"
              placeholder={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <img
              src={img}
              style={{
                width: "220px",
                height: "100px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            ></img>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">City</Form.Label>
            <Form.Control
              as="input"
              placeholder={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Address</Form.Label>
            <Form.Control
              as="input"
              placeholder={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Availability</Form.Label>
            <Form.Control
              as="input"
              placeholder={availability}
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Capacity</Form.Label>
            <Form.Control
              as="input"
              placeholder={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </Form.Group>
          <div className="clickEdit">
            <Button variant="primary" onClick={update}>
              Update
            </Button>
            <Button variant="primary" onClick={Delete}>
              Delete
            </Button>
            <Button variant="primary" onClick={home}>
              Home
            </Button>
          </div>
        </Form>
      </div>

      {popup ? (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Successfully Deleted
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{`Place with the ID of ${number} has been Delete Succssfully`}</Modal.Body>
        </Modal>
      ) : null}

      {popup1 ? (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Successfully Updated
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{`Place with the ID of ${number} has been Updated Succssfully`}</Modal.Body>
        </Modal>
      ) : null}
    </div>
    </div>
  );
}
