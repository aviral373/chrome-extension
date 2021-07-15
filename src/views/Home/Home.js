import React, { useState } from "react";
import axios from "axios";
const Home = ({ id }) => {
  const [url, setUrl] = useState("");
  const clicked = function () {
    chrome.tabs.getSelected(null, function (tab) {
      var link = document.createElement("a");
      link.href = tab.url;
      setUrl(link.href);
    });
    const payload = {
      id: id,
      urL: url,
    };
    console.log(payload);
    axios
      .post("http://localhost:3000/user/url", payload)
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <span>{url}</span>
      <button onClick={clicked}>Track the price of the current url.</button>
    </div>
  );
};

export default Home;
