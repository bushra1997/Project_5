import React, { useState, useEffect ,Component} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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

  const [value, setValue] = useState("");
  const [myurl, setMyurl] = useState("");


  

 const fileUploadHandler=(e)=>{
  e.preventDefault();
  console.log(value[0]);
  const objectURL = URL.createObjectURL(value[0])
  setMyurl(objectURL)
  console.log("MY URL",myurl);

 };

 
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
      <p>Click on the "Choose File" button to upload a file:</p>

<Form action="/action_page.php">
  <input type="file" id="myFile" name="filename" onChange={(e)=>{
    setValue(e.target.files)
    
  }}/>
  <button onClick={fileUploadHandler}>upload</button>
  <div style={{width:"400px",height:"400px",border:"1px solid black"}}><img src={myurl}></img></div>
  </Form>
  
    </>
  );
};

export default Profile;
