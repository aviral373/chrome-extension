import React from "react";
import ReactDOM from "react-dom";
import App from "./views/Options/App";
chrome.storage.sync.set({ Cock: "Balls" }, () => {
  console.log("saved");
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
