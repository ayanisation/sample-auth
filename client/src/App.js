import "./App.css";
import { Redirect, Route, Switch } from "react-router";
// import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
