const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const bodyParser = require("body-parser");

//let urlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(urlencoded);
app.use(express.static(__dirname + "/public"));
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/formData", (request, response) => {
  //ButtonClick function year, month, day 3 iig damjuulsan //
  ButtonClick(request.body.year, request.body.month, request.body.day);
  //response.render("formData", { qs: request.query });
});
app.listen(port, () => console.log("server running"));

//year month day 3 hoorond nemeh
var array = [];
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
  ss0 = _clc(Convert.ToInt32(tmp), CurrentPos);
  var tt0;
  if (dt1.Value < Convert.ToDateTime("01/01/2000")) {
    //2000.01.01 өдрөөс өмнө төрсөн хүмүүсийн тухайд:
    tt0 = ss0[2];
    // эхний нийлбэрээс (өдөр х 2)-ийг хасах
    if (dt1.Value.Day < 10) {
      tt0 = tt0 - dt1.Value.Day * 2;
    } else {
      tt0 =
        tt0 - Convert.ToInt16(gridSource.Rows[1].Cells[6].Value.ToString()) * 2;
    }
    CurrentPos = ss0[1];
    gridSource.Rows[1].Cells[CurrentPos].Value = tt0;
    if (tt0.ToString().Length > 1) {
      gridSource.Rows[1].Cells[CurrentPos].Style.BackColor = Color.LightSalmon;
    }
  } // 2000.01.01 өдрөөс хойш өөр аргаар тооцоолно.
  else {
    CurrentPos = ss0[1];
    gridSource.Rows[1].Cells[CurrentPos].Value = 1;
    CurrentPos = CurrentPos + 1;
    gridSource.Rows[1].Cells[CurrentPos].Value = 9;
    tt0 = ss0[2] + 19;
    CurrentPos = CurrentPos + 1;
    gridSource.Rows[1].Cells[CurrentPos].Value = tt0;
    gridSource.Rows[1].Cells[CurrentPos].Style.BackColor = Color.LightSalmon;
  }
  // гарсан тоог дахин цифрүүдийн нийлбэр нь 1 оронтой болтол нь цифрүүдээр задлан бичих
  CurrentPos = CurrentPos + 1;
  var ss1 = _clc(tt0, CurrentPos);
  l = ss1[1] + 1;
}
//
function _calc(n) {
  var sum = 0;
  while (n != 0) {
    sum += n % 10;
    n /= 10;
  }
  return sum;
}

// var ArrayList = [];
// function  _clc(too, col)
//         {
//             var current_too = too;
//             var current_col = col;
//             var sum_too = 0;
//             var ret_arr = [ ];
//             for ( i = 0; i < too.ToString().Length; i++)
//             {
//                 sum_too = sum_too + Convert.ToInt32(too.ToString().Substring(i, 1));
//             }
//             var ret_too = 0;
//             ArrayList  = new ArrayList();
//             list.Add(current_too);
//             list.Add(current_col);
//             list.Add(sum_too);
//              ret_arr = (int[])list.ToArray(typeof(int));
//             var ret_arr =
//             var _cycle = 1;
//             while (_cycle == 1) // нэг оронтой тоо гартал үргэлжлүүлэх юм
//             {
//                 if (current_too.ToString().Length == 1)
//                 {
//                     _cycle = 0;
//                 }
//                 // "ret" тооны цифрүүдийг нэг бүрчлэн хойш нь цувуулан бичих
//                 if (current_too.ToString().Length > 1)
//                 {
//                     for (int i = 0; i < current_too.ToString().Length; i++)
//                     {
//                         gridSource.Rows[1].Cells[current_col].Value = current_too.ToString().Substring(i, 1);
//                         current_col = current_col + 1;
//                     }
//                     //цифрүүдийн нийлбэрийг олоод "ret" хувьсагч-д хадгалах
//                     ret_too = _calc(current_too);
//                     if (ret_too == 10) ret_too = 1;
//                     // бодсон нийлбэр дүнгээ 2 дахь параметрт өгөгдсөн "col" багана дээр бичээд
//                     // нийлбэр бичсэн нүдээ тусгай өнгөөр будах
//                     gridSource.Rows[1].Cells[current_col].Value = ret_too;
//                     if (ret_too.ToString().Length > 1 || current_too == 11 || current_too == 22 || current_too == 33)
//                     {
//                         gridSource.Rows[1].Cells[current_col].Style.BackColor = Color.LightSalmon;
//                     }
//                     current_col = current_col + 1;
//                 }
//                 current_too = ret_too;
//             }
//             ret_arr[0] = current_too;
//             ret_arr[1] = current_col;
//             ret_arr[2] = sum_too;
//             return ret_arr;
//         }
