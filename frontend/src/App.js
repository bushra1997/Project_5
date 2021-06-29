import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Weddings from "./components/widings";
import BirthDayParty from "./components/birthDayPart/index";
import Funerals from "./components/Funerals/index";
import DinnerParty from "./components/birthDayPart";
import Meeting from "./components/meeting";
import Login from "./components/auth/login/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard"
import AddPlace from "./components/dashboard/AddPlace"

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPlace" component={AddPlace} />
        <Route path="/weddings" component={Weddings} />
        <Route path="/birthDayParty" component={BirthDayParty} />
        <Route path="/funerals" component={Funerals} />
        <Route path="/dinnerParty" component={DinnerParty} />
        <Route path="/meeting" component={Meeting} />
      </Switch>

    </>
  );
};

export default App;
