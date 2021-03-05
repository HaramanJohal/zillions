chrome.storage.local.get(["zillionsText", "zillionsDOM"], function (result) {
  fetch("http://127.0.0.1:5000/parse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: result.zillionsText,
      paragraph: result.zillionsDOM,
    }),
  })
    .then((data) => data.text())
    .then((text) => {
      document.getElementById("text").innerHTML = text;
    });
});
