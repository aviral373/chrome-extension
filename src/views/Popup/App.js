import React, { useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import Controller from "../controller/Controller";
function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn && <Controller />}
      {loggedIn && <Home />}
    </div>
  );
}

export default App;
