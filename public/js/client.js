const { response } = require("express");

let form = document.querySelector("form");

form.onsubmit = sendData;

function sendData(e) {
  e.preventDefault();

  let formData = new FormData(form);

  let Params = {
    headers: {
      "content-type": "appliaction/json",
    },
    body: JSON.stringify({
      Year: formData.get("Year"),
    }),
    method: "POST",
  };
  fetch("http://localhost:9000/formData", Params)
    .then((Response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
