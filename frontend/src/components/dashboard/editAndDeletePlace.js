import axios from "axios";
import { React, useState } from "react";

export default function EditPlace() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");

  const search = () => {
    axios
      .post(`http://localhost:5000/places/${number}`)
      .then((result) => {
        setName(result.data[0].name);
        setDescription(result.data[0].description);
        setImg(result.data[0].img);
        setCity(result.data[0].city);
        setAddress(result.data[0].address);
        setAvailability(result.data[0].availability);
        setCapacity(result.data[0].capacity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = () => {
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
        console.log(name);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = () => {
    axios
      .delete(`http://localhost:5000/places/${number}`, {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-div">
      <div className="search">
        <input
          type="text"
          placeholder="input number id"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={search}>Find</button>
      </div>
      <div className="place-info">
        <lable>name</lable>
        <input
          placeholder={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <lable>description</lable>
        <input
          placeholder={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <lable>img</lable>
        <input
          placeholder={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <lable>city</lable>
        <input
          placeholder={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <lable>address</lable>
        <input
          placeholder={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <lable>availability</lable>
        <input
          placeholder={availability}
          onChange={(e) => {
            setAvailability(e.target.value);
          }}
        />
        <lable>capacity</lable>
        <input
          placeholder={capacity}
          onChange={(e) => {
            setCapacity(e.target.value);
          }}
        />
      </div>
      <button onClick={update}>update</button>
      <button onClick={Delete}>delete</button>
    </div>
  );
}
