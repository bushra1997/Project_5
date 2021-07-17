import { React, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function ImgUpload() {
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  const [value, setValue] = useState("");
  const [myurl, setMyurl] = useState("");

  const fileUploadHandler = (e) => {
    e.preventDefault();
    const objectURL = URL.createObjectURL(value[0]);
    setMyurl(objectURL);
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/user/image`, {
        user_id: token.user.id,
        user_image: objectURL,
      })
      .then((result) => {});
  };
  return (
    <div>
      <p>Click on the "Choose File" button to upload a file:</p>

      <Form action="/action_page.php">
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={(e) => {
            setValue(e.target.files);
          }}
        />
        <button onClick={fileUploadHandler}>upload</button>
      </Form>
    </div>
  );
}
