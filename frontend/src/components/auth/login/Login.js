import React from 'react'
import {setToken} from '../../../reducers/login/index';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useDispatch,useSelector} from 'react-redux';


export default function Login() {
    const dispatch = useDispatch();
    let email="";
    let password="";
    const submit=()=>{
    
        axios.post("http://localhost:5000/login",{email,password})
        .then((result)=>{
    
            if (result.status==200) {
                console.log(result.data);
                dispatch(setToken(result.data.token))
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    
    };
    
    return (<>
    
    <div className="container m-3"></div>
   
</>
    )
}
