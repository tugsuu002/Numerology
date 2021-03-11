const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const bodyParser = require("body-parser");
const gridSource = [];
//let urlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(urlencoded);
app.use(express.static(__dirname + "/public"));
app.get("/", (request, response) => {
  // const { year, month, day } = request.body;
  // const result = calculate(year, month, day);
  // const arr = func(result);
  // response.send({ result: arr });
  response.sendFile(path.join(__dirname + "/index.html"));
});
app.post("/formData", (request, response) => {
  //ButtonClick function year, month, day 3 iig damjuulsan //
  ButtonClick(request.body.year, request.body.month, request.body.day);
  //response.render("formData", { qs: request.query });
});
app.listen(port, () => console.log("server running"));

const listNum = [];
// function PerformSelect(par)
//         {
//             let sql = "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
//             string path = Application.StartupPath + "\\1.db;";
//             string conString = "Data Source=" + path + "Version=3;";
//             int r_too = 0;
//             SQLiteConnection conn = new SQLiteConnection(conString);
//             using (SQLiteCommand cmd = new SQLiteCommand())
//             {
//                 conn.Open();
//                 cmd.Connection = conn;

//                 SQLiteHelper sh = new SQLiteHelper(cmd);

//                 try
//                 {
//                     sql = sql + par + "%';";
//                     DataTable dt = sh.Select(sql);
//                     grid2.DataSource = dt;
//                     r_too = dt.Rows.Count;
//                 }
//                 catch (Exception ex)
//                 {
//                     ex.ToString();
//                     DataTable dt = new DataTable();
//                     dt.Columns.Add("Error");
//                     dt.Rows.Add(ex.ToString());
//                 }
//                 conn.Close();
//             }
//             return r_too;
//         }
//----------------------------------

//year month day 3 hoorond nemeh
var ss0 = [];
function ButtonClick(YearD, MonthD, DayD) {
  var Y = YearD;
  var M = MonthD;
  var D = DayD;
  var l;
  var CurrentPos = 0;
  var tmp = Y;
  if (M < 10) {
    tmp = tmp + "0" + M;
  } else {
    tmp = tmp + M;
  }
  if (D < 10) {
    tmp = tmp + "0" + D;
  } else {
    tmp = tmp + D;
  }
  // огноог эхнээс нь цифрүүдийн нийлбэр нь 1 оронтой болтол нь цифрүүдээр задлан бичих
  var ss0 = _clc(tmp, CurrentPos);
  var tt0;
  if (Y < parseInt("2000/01/01")) {
    //2000.01.01 өдрөөс өмнө төрсөн хүмүүсийн тухайд:
    tt0 = ss0[2];
    // эхний нийлбэрээс (өдөр х 2)-ийг хасах
    if (D < 10) {
      tt0 = tt0 - D * 2;
    } else {
      tt0 = tt0 - parseInt(listNum[6]) * 2;
    }
    CurrentPos = ss0[1];
    listNum[CurrentPos] = parseInt(tt0);
    // if (tt0.ToString().Length > 1) {
    //   gridSource.Rows[1].Cells[CurrentPos].Style.BackColor = Color.LightSalmon;
    // }
  } else {
    // 2000.01.01 өдрөөс хойш өөр аргаар тооцоолно.
    CurrentPos = ss0[1];
    listNum[CurrentPos] = 1;
    CurrentPos = CurrentPos + 1;
    listNum[CurrentPos] = 9;
    tt0 = ss0[2] + 19;
    CurrentPos = CurrentPos + 1;
    listNum[CurrentPos] = tt0;
  }
  // гарсан тоог дахин цифрүүдийн нийлбэр нь 1 оронтой болтол нь цифрүүдээр задлан бичих
  CurrentPos = CurrentPos + 1;
  var ss1 = _clc(tt0, CurrentPos);
  l = ss1[1] + 1;
}
