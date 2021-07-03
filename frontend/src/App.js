import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Weddings from "./components/weddings/index";
import BirthDayParty from "./components/birthDayPart/index";
import Funerals from "./components/Funerals/index";
import DinnerParty from "./components/birthDayPart";
import Meeting from "./components/meeting";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/signUp/register";
import Dashboard from "./components/dashboard/Dashboard";
import AddPlace from "./components/dashboard/AddPlace";
import EditAndDeletePlace from "./components/dashboard/editAndDeletePlace";
import Footer from "./components/footer";
import Index from "./components/home/index";
import { useSelector } from "react-redux";
import Place from "./components/place";
import Favorite from "./components/favorite";
import PlaceIndex from "./components/place/placeIndex";
const App = () => {
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });
  console.log(token.user);
  console.log(token.token);
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPlace" component={AddPlace} />
        <Route exact path="/home" component={Index} />
        <Route
          exact
          path="/editAndDeletePlace"
          component={EditAndDeletePlace}
        />
        <Route path="/weddings" component={Weddings} />
        <Route path="/birthDayParty" component={BirthDayParty} />
        <Route path="/funerals" component={Funerals} />
        <Route path="/dinnerParty" component={DinnerParty} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/places/:id/:id" component={Place} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/placeIndex" component={PlaceIndex} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
