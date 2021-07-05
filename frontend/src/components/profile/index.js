import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${token.user.id}`)
      .then((result) => {
        if (result.status == 200) {
          setFirstName(token.user.firstName);
          setLastName(token.user.lastName);
          setCountry(token.user.country);
          setEmail(token.user.email);
          setAge(token.user.age);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{age}</div>
      <div>{country}</div>
      <div>{email}</div>
      <div>
        <Link exact to="/favorite">
          My favorite
        </Link>
      </div>
    </>
  );
};

export default Profile;

// export default function Profile() {
//     return (
//
//     )
// }
