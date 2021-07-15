import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ id }) => {
  const [url, setUrl] = useState("");
  const [dat, setDat] = useState([]);
  useEffect(() => {
    const payload = {
      id: id,
    };
    axios
      .post("http://localhost:3000/user/currenturl", payload)
      .then(function (response) {
        setDat(response.data);
      });
  });
  const clicked = function () {
    chrome.tabs.getSelected(null, async function (tab) {
      var link = document.createElement("a");
      link.href = tab.url;
      setUrl(link.href);
      const payload = {
        id: id,
        urL: link.href,
      };
      axios
        .post("http://localhost:3000/user/url", payload)
        .then(function (response) {
          console.log(response.data);
          setDat(response.data);
        });
    });
  };

  return (
    <div>
      {dat?.map((item, key) => {
        return (
          <div>
            <p>
              <b>
                {item.title} : {item.price}
              </b>
            </p>
          </div>
        );
      })}
      <button
        onClick={() => {
          clicked();
        }}
      >
        Track the price of the current url.
      </button>
    </div>
  );
};

export default Home;
