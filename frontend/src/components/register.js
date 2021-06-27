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
           <input type="text" placeholder ="First name here" onChange={(e)=>{
                   setFirstName(e.target.value)
           }}/>
           <input type="text" placeholder ="Last name here" onChange={(e)=>{
               setLastName (e.target.value)
           }}/>
           <input type="text" placeholder ="Age here" onChange={(e)=>{
               setAge(e.target.value)
           }}/>
           <input type="text" placeholder ="Country here" onChange={(e)=>{
               setCountry (e.target.value)
           }}/>
           <input type="text" placeholder ="Email here" onChange={(e)=>{
               setEmail (e.target.value)
           }}/>
           <input type="text" placeholder ="Password here" onChange={(e)=>{
               setPassword (e.target.value)
           }}/>
           <button onClick={newUsers}>Sign Up</button>
        </div>
        </>
    )
}
