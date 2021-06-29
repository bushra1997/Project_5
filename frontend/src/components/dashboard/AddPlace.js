import {React,useState} from 'react'
import axios from 'axios'

export default function AddPlace() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [availability, setAvailability] = useState('')
    const [capacity, setCapacity] = useState('')
    
    const newPlace=()=>{
        axios.post('http://localhost:5000/place',{
            name,
            description,
            img,
            city,
            address,
            availability,
            capacity
    }).then((result)=>{
        console.log(result.data);
     
    }).catch((err)=>{
        console.log(err);
    })
    }
    return (
        <>
        <div>
       
        <input type="text" placeholder ="Name here" onChange={(e)=>{
                 setName(e.target.value)
           }}/>
            <input type="text" placeholder="description here" onChange={(e)=>{
               setDescription(e.target.value)
            }}/>
            <input type="text" placeholder="img here" onChange={(e)=>{
               setImg(e.target.value)
            }}/>
            <input type="text" placeholder="city here" onChange={(e)=>{
               setCity(e.target.value)
            }}/>
            <input type="text" placeholder="address here" onChange={(e)=>{
               setAddress(e.target.value)
            }}/>
            <input type="text" placeholder="availability here" onChange={(e)=>{
               setAvailability(e.target.value)
            }}/>
            <input type="text" placeholder="capacity here" onChange={(e)=>{
               setCapacity(e.target.value)
            }}/>
            <button onClick={newPlace}>Add</button>
         
        </div>
        </>
    )
}
