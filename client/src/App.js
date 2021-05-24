import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Upload from "./Components/Upload";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/upload" component={Upload} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;
