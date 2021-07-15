import React, { useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import axios from "axios";
function App() {
  const [userId, SetUserId] = useState("");
  const [emailId, SetEmailId] = useState("");
  const [loggedIn, SetLoggedIn] = useState(() => {
    chrome.storage.sync.get(["token"], function (result) {
      const payload = {
        token: result.token,
      };
      axios.post("http://localhost:3000/user/me", payload).then((response) => {
        SetUserId(response.data._id);
        SetEmailId(response.data.email);

        console.log(userId);
        console.log(emailId);
        console.log(response.data._id);
        console.log(response.data.email);
      });
    });
    if (userId === "") {
      return false;
    } else {
      console.log(userId);
      return true;
    }
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
