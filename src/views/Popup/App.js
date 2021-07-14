import React, { useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Controller from "../controller/Controller";
function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        {loggedIn && (
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Controller} />
          </div>
        )}
        {!loggedIn && (
          <div>
            <Route exact path="/" component={Controller} />
            <Route exact path="/Home" component={Home} />
          </div>
        )}
      </Switch>
    </Router>
  );
}

export default App;
