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
      name: formData.get("year"),
      name: formData.get("month"),
      name: formData.get("day"),
    }),
    method: "POST",
  };

  fetch("http://localhost:9000/formData", Params)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
