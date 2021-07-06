import {React,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setImage } from "../../reducers/Profile";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import axios from "axios";

export default function ImgUpload() {
  const dispatch = useDispatch();
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
    console.log(value[0]);
    const objectURL = URL.createObjectURL(value[0]);
     setMyurl(objectURL);
    console.log("MY URL", myurl);
    axios.post("http://localhost:5000/user/image",({user_id:token.user.id,user_image:objectURL}))
    .then((result)=>{
        dispatch(
            setImage(objectURL)
          );
    })
    .catch((err)=>{
        console.log(err);
    })
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
