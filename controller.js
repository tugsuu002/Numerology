import sqlite3 from "sqlite3";

//2 hemjeest array [] []
var listNum = new Array(10);
//duurgelt
for (var i = 0; i < listNum.length; i++) {
  listNum[i] = new Array();
}

//=======ButtonClick========//
//year month day 3 hoorond nemeh
// var ss0 = [];

export const ButtonClick = (YearD, MonthD, DayD) => {
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
  console.log("ss0", ss0);
  var tt0;
  if (Y < parseInt("2000/01/01")) {
    //2000.01.01 өдрөөс өмнө төрсөн хүмүүсийн тухайд:
    tt0 = ss0[2];
    // эхний нийлбэрээс (өдөр х 2)-ийг хасах
    if (D < 10) {
      tt0 = tt0 - D * 2;
    } else {
      tt0 = tt0 - parseInt(listNum[1][6]) * 2;
    }
    CurrentPos = ss0[1];
    listNum[1][CurrentPos] = tt0;
    if (tt0.toString().length > 1) {
      listNum[0][CurrentPos] = 1;
    }
  } else {
    // 2000.01.01 өдрөөс хойш өөр аргаар тооцоолно.
    CurrentPos = ss0[1];
    listNum[1][CurrentPos] = 1;
    CurrentPos = CurrentPos + 1;
    listNum[1][CurrentPos] = 9;
    tt0 = ss0[2] + 19;
    CurrentPos = CurrentPos + 1;
    listNum[1][CurrentPos] = tt0;
    listNum[0][CurrentPos] = 1;
    console.log(CurrentPos);
  }
  // гарсан тоог дахин цифрүүдийн нийлбэр нь 1 оронтой болтол нь цифрүүдээр задлан бичих
  CurrentPos = CurrentPos + 1;
  var ss1 = _clc(tt0, CurrentPos);
  console.log("ss1", ss1);
  l = ss1[1] + 1;
  //===============================
  for (var k = 1; k < 10; k++) {
    var tt = "";
    for (i = 0; i < l; i++) {
      if (listNum[1][i] != null) {
        if (listNum[1][i].toString() == k.toString() && listNum[0][i] != 1) {
          tt = tt + k;
        }
      }
    }
    switch (k) {
      case 1: {
        listNum[3][1] = tt;
        listNum[8][1] = tt;
        break;
      }
      case 2: {
        listNum[4][1] = tt;
        listNum[8][2] = tt;
        break;
      }
      case 3: {
        listNum[5][1] = tt;
        listNum[8][3] = tt;
        break;
      }
      case 4: {
        listNum[3][2] = tt;
        listNum[8][4] = tt;
        break;
      }
      case 5: {
        listNum[4][2] = tt;
        listNum[8][5] = tt;
        break;
      }
      case 6: {
        listNum[5][2] = tt;
        listNum[8][6] = tt;
        break;
      }
      case 7: {
        listNum[3][3] = tt;
        listNum[8][7] = tt;
        break;
      }
      case 8: {
        listNum[4][3] = tt;
        listNum[8][8] = tt;
        break;
      }
      case 9: {
        listNum[5][3] = tt;
        listNum[8][9] = tt;
        break;
      }
    }
    listNum[3][4] =
      (listNum[3][1] || "").length +
      (listNum[3][2] || "").length +
      (listNum[3][3] || "").length;
    listNum[8][10] = listNum[3][4];
    listNum[4][4] =
      (listNum[4][1] || "").length +
      (listNum[4][2] || "").length +
      (listNum[4][3] || "").length;
    listNum[8][11] = listNum[4][4];
    listNum[5][4] =
      (listNum[5][1] || "").length +
      (listNum[5][2] || "").length +
      (listNum[5][3] || "").length;
    listNum[8][12] = listNum[5][4];
    listNum[6][1] =
      (listNum[3][1] || "").length +
      (listNum[4][1] || "").length +
      (listNum[5][1] || "").length;
    listNum[8][13] = listNum[6][1];
    listNum[6][2] =
      (listNum[3][2] || "").length +
      (listNum[4][2] || "").length +
      (listNum[5][2] || "").length;
    listNum[8][14] = listNum[6][2];
    listNum[6][3] =
      (listNum[3][3] || "").length +
      (listNum[4][3] || "").length +
      (listNum[5][3] || "").length;
    listNum[8][15] = listNum[6][3];
    listNum[6][4] =
      (listNum[3][1] || "").length +
      (listNum[4][2] || "").length +
      (listNum[5][3] || "").length;
    listNum[8][16] = listNum[6][4];
    // listNum[7][1] = "Характер";
    // listNum[7][2] = "Биоэнерги";
    // listNum[7][3] = "Сонирхол";
    // listNum[7][4] = "Эрүүл мэнд";
    // listNum[7][5] = "Логик";
    // listNum[7][6] = "Мастер";
    // listNum[7][7] = "Аз";
    // listNum[7][8] = "Хариуцлага";
    // listNum[7][9] = "Ой санамж";
    // listNum[7][10] = "Зорилго эрмэлзэл";
    // listNum[7][11] = "Гэр бүл";
    // listNum[7][12] = "Дадал зуршил";
    // listNum[7][13] = "Өөрийн үнэлэмж";
    // listNum[7][14] = "Материаллаг байдал";
    // listNum[7][15] = "Гоц авъяас";
    // listNum[7][16] = "Шүтлэг";
  }
  var txt_arr = [];
  var txtlist = new Array(8);
  console.table(listNum);
  for (i = 0; i < 8; i++) {
    txtlist.push("");
  }
  for (i = 0; i < 3; i++) {
    var n = listNum[8][i + 1].toString().length;
    txt_arr[0] = listNum[8][i + 1].toString();
    Conv_par(i + 1, n, GetQueryResult);
    // if (tNum > 0) {
    //   for (j = 0; j < 7; j++) {
    //     listNum[12 + i][j] = grid2.Rows[0].Cells[j].Value;
    //     txt_arr[j + 1] = grid2.Rows[0].Cells[j].Value.ToString();
    //   }
    //   info_arr[i] = txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n";
    //   info_arr[i] = info_arr[i] + (txt_arr[3] + "\r\n");
    //   info_arr[i] = info_arr[i] + (txt_arr[4] + "\r\n");
    //   info_arr[i] = info_arr[i] + "\r\n";
    //   info_arr[i] = info_arr[i] + (txt_arr[6] + "\r\n");
    //   txtInfo.AppendText(info_arr[i].ToString());
    // }
    // else
    // {
    //     gridSource.Rows[12 + i].Cells[0].Value = (i + 10).ToString();
    //     gridSource.Rows[12 + i].Cells[1].Value = gridSource.Rows[7].Cells[i + 1].Value.ToString();
    //     gridSource.Rows[12 + i].Cells[4].Value = (i + 10).ToString() + "." + n.ToString();
    //     txt_arr[2] = (i + 10).ToString();
    //     txt_arr[4] = (i + 10).ToString() + "." + n.ToString();
    //     txtInfo.AppendText((i + 1).ToString() + "-Р БҮЛЭГ.\r\n");
    //     info_arr[i] = (txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
    //     info_arr[i] = info_arr[i] + (txt_arr[4] + "\r\n");
    //     txtInfo.AppendText(info_arr[i].ToString());
    //     /*
    //     txtInfo.AppendText(txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
    //     txtInfo.AppendText(txt_arr[4] + "\r\n");
    //     */
    // }
    // txtInfo.AppendText("\r\n");
    // txtInfo.AppendText("\r\n");
  }
  //suulin 7 bodolt =====================>
  // for ( i = 0; i < 7; i++)
  //               {
  //                   var n = Convert.ToInt16(gridSource.Rows[8].Cells[i + 10].Value.ToString());
  //                   txt_arr[0] = gridSource.Rows[8].Cells[i + 10].Value.ToString();
  //                   var par = Conv_par(i + 10, n);
  //                   var tNum = PerformSelect(par);
  //                   if (tNum > 0)
  //                   {
  //                       for ( j = 0; j < 7; j++)
  //                       {
  //                           gridSource.Rows[21 + i].Cells[j].Value = grid2.Rows[0].Cells[j].Value;
  //                           txt_arr[j + 1] = grid2.Rows[0].Cells[j].Value.ToString();
  //                       }
  //                       //txtInfo.AppendText((i + 10).ToString() + "-Р БҮЛЭГ.\r\n");
  //                       info_arr[i + 9] = (txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + (txt_arr[3] + "\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + (txt_arr[4] + "\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + ("\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + (txt_arr[6] + "\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + (txt_arr[7] + "\r\n");
  //                       txtInfo.AppendText(info_arr[i + 9].ToString());
  //                       /*
  //                       txtInfo.AppendText(txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
  //                       txtInfo.AppendText(txt_arr[3] + "\r\n");
  //                       txtInfo.AppendText(txt_arr[4] + "\r\n");
  //                       txtInfo.AppendText("\r\n");
  //                       txtInfo.AppendText(txt_arr[6] + "\r\n");
  //                       txtInfo.AppendText(txt_arr[7] + "\r\n");
  //                       */
  //                   }
  //                   else
  //                   {
  //                       //txtInfo.AppendText((i + 10).ToString() + "-Р БҮЛЭГ.\r\n");
  //                       gridSource.Rows[21 + i].Cells[0].Value = (i + 10).ToString();
  //                       gridSource.Rows[21 + i].Cells[1].Value = gridSource.Rows[7].Cells[i + 10].Value.ToString();
  //                       gridSource.Rows[21 + i].Cells[4].Value = (i + 10).ToString() + "." + n.ToString();
  //                       txt_arr[2] = (i + 10).ToString();
  //                       txt_arr[4] = (i + 10).ToString() + "." + n.ToString();
  //                       info_arr[i + 9] = (txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
  //                       info_arr[i + 9] = info_arr[i + 9] + (txt_arr[4] + "\r\n");
  //                       txtInfo.AppendText(info_arr[i + 9].ToString());
  //                       /*
  //                       txtInfo.AppendText(txt_arr[0] + " (" + txt_arr[2] + ") " + "\r\n");
  //                       txtInfo.AppendText(txt_arr[4] + "\r\n");
  //                       */
  //                   }
  //                 }
};
let ret_val = "";
const GetQueryResult = (param) => {
  console.log("#### param", param);
  ret_val = param;
  //var tNum = PerformSelect(param);
};

//=========PerformSelect======//
function PerformSelect(par) {
  var sql =
    "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
  sql = sql + par + "%';";
  var r_too = 0;
  db.serialize(() => {
    db.all(sql, [], (err, rows) => {
      rows.forEach((element) => {
        console.log(element);
      });
    });
  });

  // try
  // {

  // 	DataTable dt = sh.Select(sql);
  // 	grid2.DataSource = dt;
  // 	r_too = dt.Rows.Count;
  // }
  // catch (RuntimeException ex)
  // {
  // 	ex.toString();
  // 	DataTable dt = new DataTable();
  // 	dt.Columns.Add("Error");
  // 	dt.Rows.Add(ex.toString());
  // 	grid2.DataSource = dt;
  // }
  // conn.Close();
  return;
}
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

// open the database
let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

//===========Conv_par=======//
async function Conv_par(grp, detail, cb) {
  //-----------Connected-------------<=
  var ret_val = "123";
  var par = grp.toString() + "." + detail.toString();
  //   var tol = 1.7;
  var sql =
    "SELECT detail_value FROM View1 WHERE detail_value like '" + par + "%';";
  var r_too = 0;
  var ret_dt = new Array();
  db.serialize(() => {
    var count = 0;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          ret_dt[0] = row.detail_value;
          count++;
        });
        r_too = count;
        if (r_too == 1) {
          ret_val = ret_dt[0].toString();
          console.log("r_too == 1", ret_val);
        } else {
          //2 hemjeest array [] []
          var ret_dt = new Array();
          sql =
            "SELECT detail_value," +
            " CASE substr(detail_value, length(detail_value) - 1, 1)" +
            " WHEN '+' THEN substr(detail_value, 1, length(detail_value)-1)" +
            " WHEN '-' THEN substr(detail_value, 1, length(detail_value)-1) ELSE detail_value" +
            " END as val," +
            " CASE substr(detail_value, length(detail_value) - 1, 1)" +
            " WHEN '+' THEN '>=' WHEN '-' THEN '<=' ELSE ''" +
            " END as sign" +
            " FROM View1" +
            " WHERE grp_code = " +
            grp.toString() +
            " ORDER BY CAST(SUBSTR(detail_value, length(grp_code)+2) as INT)";
          try {
            var count1 = 0;
            db.all(sql, [], (err, rows) => {
              if (err) {
                throw err;
              }
              rows.forEach((row) => {
                ret_dt[count1] = row;
                count1++;
              });
              r_too = count1;
              if (r_too > 0) {
                var r_min = ret_dt[0].val;
                var r_max = ret_dt[r_too - 1].val;
                var view = [];
                view = ret_dt;
                for (i = 0; i < view.length; i++) {
                  if (parseInt(conv1(par)) < parseInt(conv1(r_min))) {
                    ret_val = r_min;
                    // return cb(ret_val);
                    // return ret_val;
                    // ret_val = view[i].detail_value
                    //   .toString()
                    //   .substr(1, view[i].detail_value.toString().length - 1);
                  } else if (parseInt(conv1(r_max)) < parseInt(conv1(par))) {
                    ret_val = r_max;
                    // return cb(ret_val);
                    // return ret_val;
                    // ret_val = view[i].detail_value
                    //   .toString()
                    //   .substr(1, view[i].detail_value.toString().length - 1);
                  }
                  if (
                    parseInt(conv1(r_min)) < parseInt(conv1(par)) &&
                    parseInt(conv1(par)) < parseInt(conv1(r_max)) &&
                    parseInt(conv1(view[i].val)) < parseInt(conv1(par))
                  ) {
                    ret_val = view[i].detail_value;
                    console.log("ih sonin ued ", ret_val);
                    // return cb(ret_val);
                    // return ret_val;
                  }
                }
              }
              try {
                var sql =
                  "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
                sql = sql + ret_val + "%';";
                console.log("rererer", ret_val);
                var r_too = 0;
                var dt = new Array();
                var count2 = 0;
                db.all(sql, [], (err, rows) => {
                  rows.forEach((el) => {
                    console.log("eell", el);
                    dt[count2] = el;
                    count2++;
                  });
                  console.log("dtddd", dt);
                  r_too = count2;
                  return cb(dt);
                });
              } catch (ex) {
                console.log("errss");
                // ex.ToString();
                // var dt = new DataTable();
                // dt.Columns.Add("Error");
                // dt.Rows.Add(ex.ToString());
              }
            });
          } catch (ex) {
            console.log("errs");
            // ex.ToString();
            // var dt = new DataTable();
            // dt.Columns.Add("Error");
            // dt.Rows.Add(ex.ToString());
          }
        }
      });
    } catch (ex) {
      console.log("err");
      // ex.toString();
      // var dt = new DataTable();
      // dt.Columns.Add("Error");
      // dt.Rows.Add(ex.ToString());
    }
  });
  return;
  db.close();
}

//=======conv1============/
function conv1(p) {
  var r;
  r = p.toString().substr(p.indexOf(".") + 1, 1);
  return r;
}
//======================//

//=======_clc============/
function _clc(too, col) {
  var current_too = too;
  var current_col = col;
  var sum_too = 0;
  current_too = current_too.toString();
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
        listNum[0][current_col] = 0;
        listNum[1][current_col] = parseInt(current_too.substr(i, 1));
        current_col = current_col + 1;
      }
      //цифрүүдийн нийлбэрийг олоод "ret" хувьсагч-д хадгалах
      ret_too = _calc(current_too);
      if (ret_too == 10) ret_too = 1;
      // бодсон нийлбэр дүнгээ 2 дахь параметрт өгөгдсөн "col" багана дээр бичээд
      // нийлбэр бичсэн нүдээ тусгай өнгөөр будах
      listNum[1][current_col] = ret_too;
      if (
        ret_too.toString().length > 1 ||
        current_too == 11 ||
        current_too == 22 ||
        current_too == 33
      ) {
        listNum[0][current_col] = 1;
      }
      current_col = current_col + 1;
    }
    current_too = ret_too.toString();
  }
  current_too = parseInt(current_too);
  ret_arr.push(current_too);
  ret_arr.push(current_col);
  ret_arr.push(sum_too);
  return ret_arr;
}
//=====================END====================================//
