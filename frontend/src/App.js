import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/auth/login/Login";
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
    </>
  );
};

export default App;
