import React, { useState, useEffect ,Component} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgUpload from "./imgUpload";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
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

  useEffect(() => {
    
    axios.post("http://localhost:5000/user/pics",({user_id:token.user.id}))
    .then((result)=>{

      setImg(result.data[(result.data.length)-1].user_image)
      console.log(result.data.length);
      console.log(result.data.length);
    })

  }, [])

 
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
    <ImgUpload/>
   
    <div
          style={{ width: "400px", height: "400px", border: "1px solid black" }}
        >
          <img src={img}></img>
        </div>
    </>
  );
};

export default Profile;
