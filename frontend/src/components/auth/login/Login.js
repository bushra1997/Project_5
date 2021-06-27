import {React,useState} from 'react'
import {setToken} from '../../../reducers/login/index';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useDispatch,useSelector} from 'react-redux';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    
    const submit=()=>{
    
        axios.post('http://localhost:5000/login',{email,password})
        .then((result)=>{
    
            if (result.status==200) {
                console.log(result.data);
                dispatch(setToken(result.data.token))
                history.push("/home")
            }
            
        })
        .catch((err)=>{
            
            console.log(err.response.data);
        })
        
    
    };
    
    return (<>
    
    <div className="container m-3">
        <form>
        <label> Email address:</label>
        <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value.toLowerCase())}} />
        <label> Password:</label>
        <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
        </form>
        <button type="submit" className="btn btn-primary" onClick={submit}> Login</button>
    </div>
   
</>
    )
}
