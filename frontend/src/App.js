import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from './components/Register';


const App = () => {
  return (
    <>
	      <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
    </>
  );
  };

export default App;
