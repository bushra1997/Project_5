import React, { useState } from "react"; 
import axios from "axios";
    export default function Search() {
        const [search, setSearch] = useState("")
     
        const search_icon=(e)=>{
e.preventDefault();
//const map1=search.map()
axios
  .get(`http://localhost:5000/search/${search}`)
  .then((result) => {
      console.log("result :",result.data[0]);
  })
  .catch((err) => {
    console.log(err);
  });
};

        return (
           
   <form class="form-inline my-2 my-lg-0" >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Find a place"
                aria-label="Search"
                onChange={(e)=>{
                setSearch(e.target.value)
                }}
              />
              <button
                class="btn my-2 my-sm-0"
                onClick={search_icon} 
              >
                Search
              </button>
            </form>    
          
        )
    
}  