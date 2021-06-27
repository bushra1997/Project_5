import {React,useState} from "react";
import axios from 'axios';
import React from 'react';

export default function Register() {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState(0)
const [country, setCountry] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const newUsers= ()=>{
    axios.post('http://localhost:5000/user',{
        firstName,
        lastName,
        age,
        country,
        email,
        password
    }).then((result)=>{
        if(result.data){
            history.push('.login')
        }
    }).catch((err)=>{
        console.log(err);
    })
}
    return (
        <>
        <div>
           <input type="text" placeholder ="First name here"/>
           <input type="text" placeholder ="Last name here"/>
           <input type="text" placeholder ="Age here"/>
           <input type="text" placeholder ="Country here"/>
           <input type="text" placeholder ="Email here"/>
           <input type="text" placeholder ="Password here"/>
           
        </div>
        </>
    )
}
