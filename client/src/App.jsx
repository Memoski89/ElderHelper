import React, {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";

import Login from "./components/login";
import SignUp from "./components/signUpUsers";
import homeUsers from "./components/homeUsers";

function App() {

  const [token, setToken] = useState("");

  const validate = () => {
    //this is from the example and how the token is checked.
    // if there is no token, i.e. unsuccessful login, the token is not set and and the Login component gets displayed..
    if (!token) {
      //want to send message saying you have not logged in
      console.log('BAD LOGIN')
      return <Login setToken={setToken} section />;
    } else {
      //succesfull login, redirect to home
      Redirect('/homeUsers')
    }
  };

  validate()


  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              elderHelper
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>              
              <Route exact path="/" component={homeUsers} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />   
              <Route path="/homeUsers" component={homeUsers} />             
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
