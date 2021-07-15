console.log("Hello Background");

chrome.storage.sync.set({ Cock: "Balls" }, () => {
  console.log("saved");
});

chrome.storage.sync.get(["Cock"], function (result) {
  console.log("Value currently is " + JSON.stringify(result));
});
