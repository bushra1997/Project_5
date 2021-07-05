import React, { useState } from "react"; 
import axios from "axios";
    export default function Search() {
        const [search, setSearch] = useState("")
        const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");

        const search_icon=()=>{
// e.preventDefault();
axios
  .get(`http://localhost:5000/search/${name}`)
  .then((result) => {
      console.log("reeeeeesult",result.data[0]);
    setName(result.data[0].name);
    setDescription(result.data[0].description);
    setImg(result.data[0].img);
    setCity(result.data[0].city);
    setAddress(result.data[0].address);
    setAvailability(result.data[0].availability);
    setCapacity(result.data[0].capacity);
  })
  .catch((err) => {
    console.log(err);
  });
};

        return (
            <div className="search">
                {/* <button onClick={search_icon}></button> */}
   <form class="form-inline my-2 my-lg-0" >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder={search}
                aria-label="Search"
              />
              <button
                class="btn my-2 my-sm-0"
                type="submit"
                onClick={search_icon}
                
              >
                Search
              </button>
            </form>    
            </div>
        )
    
}  