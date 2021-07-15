import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import axios from "axios";
function App() {
  const [userId, SetUserId] = useState("");
  const [emailId, SetEmailId] = useState("");
  const [loggedIn, SetLoggedIn] = useState(false);
  const [token, Settoken] = useState("");
  useEffect(() => {
    chrome.storage.sync.get(["token"], function (result) {
      const payload = {
        token: result.token,
      };
      Settoken(result.token);

      axios.post("http://localhost:3000/user/me", payload).then((response) => {
        SetUserId(response.data._id);
        SetEmailId(response.data.email);
        SetLoggedIn(true);
      });
    });
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/home" component={Home} />
          {!loggedIn ? <Login /> : <Home id={token} />}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
