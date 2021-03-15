const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
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

//=========PerformSelect======//
// function PerformSelect(par)
// 	{
// 		var sql = "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
// 		var path = Application.StartupPath + "\\1.db;";
// 		var conString = "Data Source=" + path + "Version=3;";
// 		var r_too = 0;
// 		SQLiteConnection conn = new SQLiteConnection(conString);
// 		try (SQLiteCommand cmd = new SQLiteCommand())
// 		{
// 			conn.Open();
// 			cmd.setConnection(conn);

// 			SQLiteHelper sh = new SQLiteHelper(cmd);

// 			try
// 			{
// 				sql = sql + par + "%';";
// 				DataTable dt = sh.Select(sql);
// 				grid2.DataSource = dt;
// 				r_too = dt.Rows.Count;
// 			}
// 			catch (RuntimeException ex)
// 			{
// 				ex.toString();
// 				DataTable dt = new DataTable();
// 				dt.Columns.Add("Error");
// 				dt.Rows.Add(ex.toString());
// 				grid2.DataSource = dt;
// 			}
// 			conn.Close();
// 		}
// 		return r_too;
// 	}
//----------------------------------

//=======_calc======//
//niilber
function _calc(n) {
  var sum = 0;
  for (i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }
  return sum;
}
//===========Conv_par=======//
function Conv_par(grp, detail) {
  // open the database
  let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });
  //-----------Connected-------------<=
  var ret_val = "";
  var par = grp.toString() + "." + detail.toString();
  var r_too = 0;
  db.serialize(() => {
    db.each(
      "SELECT detail_value FROM View1 WHERE detail_value like '" + par + "%';",
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        r_too = row.count;
        if (r_too == 1) {
          console.log("ds" + ret_val);
          ret_val = row[0]["detail_value"].toString();
        }
      }
    );
  });
  return ret_val;
}

//=======_clc============/
function _clc(too, col) {
  var current_too = too;
  var current_col = col;
  var sum_too = 0;
  var ret_arr = [];
  for (i = 0; i < too.length; i++) {
    sum_too = sum_too + parseInt(too.substr(i, 1));
  }
  var ret_too = 0;
  var list = [];
  list.push(current_too);
  list.push(current_col);
  list.push(sum_too);
  //var ret_arr = parseInt(list);
  var ret_arr = [];
  var _cycle = 1;
  while (_cycle == 1) {
    // нэг оронтой тоо гартал үргэлжлүүлэх юм
    if (current_too.length == 1) {
      _cycle = 0;
    }
    // "ret" тооны цифрүүдийг нэг бүрчлэн хойш нь цувуулан бичих
    if (current_too.length > 1) {
      for (i = 0; i < current_too.length; i++) {
        listNum.push(parseInt(current_too.substr(i, 1)));
        current_col = current_col + 1;
      }
      //цифрүүдийн нийлбэрийг олоод "ret" хувьсагч-д хадгалах
      ret_too = _calc(current_too);
      if (ret_too == 10) ret_too = 1;
      // бодсон нийлбэр дүнгээ 2 дахь параметрт өгөгдсөн "col" багана дээр бичээд
      // нийлбэр бичсэн нүдээ тусгай өнгөөр будах
      gridSource.push(ret_too);
      current_col = current_col + 1;
    }
    current_too = ret_too.toString();
  }
  ret_arr.push(current_too);
  ret_arr.push(current_col);
  ret_arr.push(sum_too);
  return ret_arr;
}

//=======ButtonClick========//
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
  //===============================
  for (k = 1; k < 10; k++) {
    var tt = "";
    for (i = 0; i < l; i++) {
      if (listNum[i] != null) {
        if (listNum[i].toString() == k.toString()) {
          tt = tt + k;
        }
      }
    }
    switch (k) {
      case 1: {
        Numl.push(tt);
        gridSource8[8][1] = tt;
        break;
      }
      case 2: {
        Numl.push(tt);
        gridSource8[8][2] = tt;
        break;
      }
      case 3: {
        Numl.push(tt);
        gridSource8[8][3] = tt;
        break;
      }
      case 4: {
        Numl.push(tt);
        gridSource8[8][4] = tt;
        break;
      }
      case 5: {
        Numl.push(tt);
        gridSource8[8][5] = tt;
        break;
      }
      case 6: {
        Numl.push(tt);
        gridSource8[8][6] = tt;
        break;
      }
      case 7: {
        Numl.push(tt);
        gridSource8[8][7] = tt;
        break;
      }
      case 8: {
        Numl.push(tt);
        gridSource8[8][8] = tt;
        break;
      }
      case 9: {
        Numl.push(tt);
        gridSource8[8][9] = tt;
        break;
      }
    }
  }
  txt_arr = [];
  var txtlist = new Array(8);
  for (i = 0; i < 8; i++) {
    txtlist.push("");
  }
  for (i = 0; i < 9; i++) {
    var n = gridSource8[8][i + 1].length;
    txt_arr[0] = gridSource8[8][i + 1].toString();
    var par = Conv_par(i + 1, n);
    var tNum = PerformSelect(par);
    // if (tNum > 0) {
    //   for (j = 0; j < 7; j++) {
    //     gridSource[12 + i][j] = grid2[0][j];
    //     txt_arr[j + 1] = grid2.Rows[0].Cells[j].Value.ToString();
    //   }
    //   info_arr[i] = txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n";
    //   info_arr[i] = info_arr[i] + (txt_arr[3] + "\r\n");
    //   info_arr[i] = info_arr[i] + (txt_arr[4] + "\r\n");
    //   info_arr[i] = info_arr[i] + "\r\n";
    //   info_arr[i] = info_arr[i] + (txt_arr[6] + "\r\n");
    // } else {
    //   gridSource.Rows[12 + i].Cells[0].Value = (i + 10).ToString();
    //   gridSource.Rows[12 + i].Cells[1].Value = gridSource.Rows[7].Cells[
    //     i + 1
    //   ].Value.ToString();
    //   gridSource.Rows[12 + i].Cells[4].Value =
    //     (i + 10).ToString() + "." + n.ToString();
    //   txt_arr[2] = (i + 10).ToString();
    //   txt_arr[4] = (i + 10).ToString() + "." + n.ToString();
    //   info_arr[i] = txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n";
    //   info_arr[i] = info_arr[i] + (txt_arr[4] + "\r\n");
    // }
    // txtInfo.AppendText("\r\n");
    // txtInfo.AppendText("\r\n");
  }
}
