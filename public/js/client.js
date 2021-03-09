let form = document.querySelector("form");
form.onsubmit = sendData;
function sendData(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let Params = {
    headers: {
      "Content-type": "application/json",
    }, //form дээр бөглсөн мэдээлэл
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
      console.log("data++");
      console.log(data);
    })
    .catch((err) => console.log(err));
}
// //db connect
// let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Connected to the chinook database.");
// });
//////////////////////////////////////////////////

// functions
// function PerformSelect(par) {
//   var sql =
//     "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
//   let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log("Connected to the chinook database.");
//   });
//   return r_too;

//   return new Function("return x;"); // this |x| refers global |x|
// }
