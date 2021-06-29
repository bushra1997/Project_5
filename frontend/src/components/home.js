import {React,useState}  from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { Button} from 'react-bootstrap';
import { Route, Link, useHistory } from "react-router-dom";
import Hamburger from 'hamburger-react'
import "./weddings/widing.css"

function Example() {
    const [open, setOpen] = useState(false);
    
  
    return (
      <>
        <Hamburger
        direction="left"
         toggled={open}
         toggle={setOpen}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          
        </Hamburger>
        <Collapse in={open}>
          <div id="example-collapse-text" className="log">
        <div className="log">
          <ul>
        <li>
          <Link to="/Logo">Logo</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      </div>
          </div>
        </Collapse>
      </>
    );
  }
  
  
  export default Example;
  

