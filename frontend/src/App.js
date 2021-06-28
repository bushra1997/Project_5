import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Weddings from "./components/widings";
import BirthDayParty from "./components/birthDayPart/index";
import Funerals from "./components/Funerals/index";
import DinnerParty from "./components/birthDayPart";
import Meeting from "./components/meeting";
import Login from "./components/auth/login/Login";
import Register from './components/Register';


const App = () => {
  return (
    <>
      <Navigation />
      <Route path="/weddings" component={Weddings} />
      <Route path="/birthDayParty" component={BirthDayParty} />
      <Route path="/funerals" component={Funerals} />
      <Route path="/dinnerParty" component={DinnerParty} />
      <Route path="/meeting" component={Meeting} />
        <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
    </>
  );
};


export default App;
