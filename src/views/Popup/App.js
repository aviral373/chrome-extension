import React, { useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import axios from "axios";
function App() {
  const [loggedIn, SetLoggedIn] = useState(() => {
    chrome.storage.local.get("[token]", (result) => {
      const payload = {
        token: result,
      };
      console.log("hello");
      console.log(JSON.stringify(payload));
      axios.post("http://localhost:3000/user/me", payload).then((response) => {
        console.log(response);
      });
    });
    return false;
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/home" component={Home} />
          {!loggedIn ? <Login /> : <Home />}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
