import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Login from "../Login/Login";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Controller = () => {
  const strings = ["Need an account Register", "Already have an account login"];
  const [page, setPage] = useState(false);
  const [buttonText, setButtonText] = useState(0);
  const buttoClicked = () => {
    setPage(!page);
    setButtonText(buttonText ? 0 : 1);
  };
  return (
    <div>
      <Switch>
      <button onClick={buttoClicked}>{strings[buttonText]}</button>
    </div>
  );
};

export default Controller;
