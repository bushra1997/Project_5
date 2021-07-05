import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  console.log(token, "kkkkkkkkkk");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${token.user.id}`)
      .then((result) => {
        if (result.status == 200) {
          setFirstName(token.user.firstName);
          setCountry(token.user.country);
          setEmail(token.user.email);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return(
    <>
  <div>{firstName}</div>
  </>
  )

};

export default Profile;

// export default function Profile() {
//     return (
//         <div>
//           <Link exact to="/favorite">
//                   My favorite
//                 </Link>
//         </div>
//     )
// }
