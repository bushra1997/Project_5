import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Search() {
  const history = useHistory();
  const [search, setSearch] = useState("");


  const searchEvent =(e) => {
    e.preventDefault();
          history.push(`/place/name/${search}`)
  }
  return (
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Find a place"
        aria-label="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button class="btn my-2 my-sm-0" onClick={searchEvent}>
        Search
      </button>
    </form>
  );
}
