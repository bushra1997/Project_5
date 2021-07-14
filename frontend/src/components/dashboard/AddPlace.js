import { React, useState } from "react";
import axios from "axios";
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
export default function AddPlace() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");
  const history = useHistory();
  const [popup2, setPopup2] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [place_id, setPlace_id] = useState("");
  const [type, setType] = useState("birthDayParty");
  const [disabledev, setDisabledev] = useState(true);

  const newPlace = (e) => {
    setName("");
    setDescription("");
    setImg("");
    setCapacity("");
    setCity("");
    setAddress("");
    setAvailability("");

    e.preventDefault();
    axios
      .post("http://localhost:5000/places", {
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
        setPopup2(true);
        setSmShow(true);
        setPlace_id(result.data.insertId);
        setDisabledev(false);
      })
      .catch((err) => {});
  };

  const addOccasions = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/occasions", { place_id, type })
      .then((result) => {
        setDisabledev(true);
      })
      .catch((err) => {});
  };

  const home = () => {
    history.push("/dashboard");
  };
  const handleSelect = (e) => {
    const { name, value } = e.target;
    setType(value);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Form onSubmit={newPlace}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Place Title</Form.Label>
                  <Form.Control
                    as="input"
                    value={name}
                    placeholder="PLace title"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={description}
                    placeholder="Descripe place"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Image</Form.Label>
                  <Form.Control
                    as="input"
                    value={img}
                    placeholder="Image URL"
                    onChange={(e) => {
                      setImg(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Capacity</Form.Label>
                  <Form.Control
                    as="input"
                    value={capacity}
                    placeholder="Capacity"
                    onChange={(e) => {
                      setCapacity(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">City</Form.Label>
                  <Form.Control
                    as="input"
                    value={city}
                    placeholder="City"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Address</Form.Label>
                  <Form.Control
                    as="input"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Availability</Form.Label>
                  <Form.Control
                    as="input"
                    value={availability}
                    placeholder="Availability"
                    onChange={(e) => {
                      setAvailability(e.target.value);
                    }}
                  />
                </Form.Group>
                <div className="click">
                  <Button variant="primary" onClick={newPlace}>
                    Submit
                  </Button>
                  <Button
                    variant="primary"
                    onClick={home}
                    style={{
                      backgroundColor: "#fff",
                      color: "#cf6262",
                      fontWeight: "600",
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-lg-6" id="idInput">
              <Form onSubmit={newPlace}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="name_label">Place ID</Form.Label>
                  <Form.Control
                    as="input"
                    placeholder="PLace ID"
                    value={place_id}
                  />
                </Form.Group>

                <select
                  onChange={handleSelect}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="birthDayParty">Birth Day Party</option>
                  <option value="weddings">Weddings</option>
                  <option value="meeting">Meeting</option>
                  <option value="dinnerParty">Dinner Party</option>
                  <option value="funerals">Funerals</option>
                </select>
                <div className="click">
                  <Button
                    variant="primary"
                    onClick={addOccasions}
                    disabled={disabledev}
                  >
                    Add
                  </Button>
                </div>
              </Form>
            </div>
            {popup2 ? (
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Place has been added
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Place  has been Added Succssfully`}</Modal.Body>
              </Modal>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
