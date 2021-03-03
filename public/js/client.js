let form = document.querySelector("form");

form.onsubmit = sendData;

function sendData(e) {
  e.preventDefault();

  let formData = new FormData(form);

  let Params = {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      year: formData.get("year"),
      month: formData.get("month"),
      day: formData.get("day"),
    }),
    method: "POST",
  };

  fetch("http://localhost:9000/formData", Params)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log("ddd" + data);
    })
    .catch((err) => console.log(err));
}
