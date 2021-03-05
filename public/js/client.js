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
      console.log("ddd" + data);
    })
    .catch((err) => console.log(err));
}
//db connect
let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});
//////////////////////////////////////////////////

// functions
function PerformSelect(par) {
  var sql =
    "SELECT Buleg.grp_code,Buleg.grp_name,Buleg.grp_define,Buleg.grp_comment, Desc.detail_value,Desc.detail_advice,Desc.detail_settings FROM Buleg INNER JOIN Desc ON Buleg.grp_code = Desc.grp_code where detail_value like '";
  let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });
  return r_too;

  return new Function("return x;"); // this |x| refers global |x|
}

//_calc function
function _calc(n) {
  var sum = 0;
  while (n != 0) {
    sum += n % 10;
    n /= 10;
  }
  return sum;
}

// // _clc function
// function _clc(too, col)
// {
//     var current_too = too;
//     var current_col = col;
//     var sum_too = 0;

//     for (var i = 0; i < too.ToString().Length; i++)
//     {
//         sum_too = sum_too + Convert.ToInt32(too.ToString().Substring(i, 1));
//     }
//     var ret_too = 0;
//     var list = new ArrayList();
//     list.Add(current_too);
//     list.Add(current_col);
//     list.Add(sum_too);
//     let ret_arr = (let)list.ToArray(typeof(let));
//     let _cycle = 1;
//     while (_cycle == 1) // нэг оронтой тоо гартал үргэлжлүүлэх юм
//     {
//         if (current_too.ToString().Length == 1)
//         {
//             _cycle = 0;
//         }
//         // "ret" тооны цифрүүдийг нэг бүрчлэн хойш нь цувуулан бичих
//         if (current_too.ToString().Length > 1)
//         {
//             for (var i = 0; i < current_too.ToString().Length; i++)
//             {
//                 gridSource.Rows[1].Cells[current_col].Value = current_too.ToString().Substring(i, 1);
//                 current_col = current_col + 1;
//             }
//             //цифрүүдийн нийлбэрийг олоод "ret" хувьсагч-д хадгалах
//             ret_too = _calc(current_too);
//             if (ret_too == 10) ret_too = 1;
//             // бодсон нийлбэр дүнгээ 2 дахь параметрт өгөгдсөн "col" багана дээр бичээд
//             // нийлбэр бичсэн нүдээ тусгай өнгөөр будах
//             gridSource.Rows[1].Cells[current_col].Value = ret_too;
//             if (ret_too.ToString().Length > 1 || current_too == 11 || current_too == 22 || current_too == 33)
//             {
//                 gridSource.Rows[1].Cells[current_col].Style.BackColor = Color.LightSalmon;
//             }
//             current_col = current_col + 1;
//         }
//         current_too = ret_too;
//     }
//     ret_arr[0] = current_too;
//     ret_arr[1] = current_col;
//     ret_arr[2] = sum_too;
//     return ret_arr;
// }

// function Conv_par(grp, detail)
//         {
//             let ret_val = "";
//             let par = grp.ToString() + "." + detail.ToString();
//             let path = Application.StartupPath + "\\1.db;";
//             let conString = "Data Source=" + path + "Version=3;";

//             let sql = "SELECT detail_value FROM View1 WHERE detail_value like '" + par + "%';";
//             DataTable ret_dt;
//             int r_too = 0;
//             SQLiteConnection conn = new SQLiteConnection(conString);
//             using (SQLiteCommand cmd = new SQLiteCommand())
//             {
//                 conn.Open();
//                 cmd.Connection = conn;

//                 SQLiteHelper sh = new SQLiteHelper(cmd);

//                 try
//                 {
//                     ret_dt = sh.Select(sql);
//                     r_too = ret_dt.Rows.Count;
//                     if (r_too == 1)
//                     {
//                         ret_val = ret_dt.Rows[0]["detail_value"].ToString();
//                     }
//                     else
//                     {
//                         sql = "SELECT detail_value,"
//                             + " CASE substr(detail_value, length(detail_value) - 1, 1)"
//                             + " WHEN '+' THEN substr(detail_value, 1, length(detail_value)-1)"
//                             + " WHEN '-' THEN substr(detail_value, 1, length(detail_value)-1) ELSE detail_value"
//                             + " END as val,"
//                             + " CASE substr(detail_value, length(detail_value) - 1, 1)"
//                             + " WHEN '+' THEN '>=' WHEN '-' THEN '<=' ELSE ''"
//                             + " END as sign"
//                             + " FROM View1"
//                             + " WHERE grp_code = " + grp.ToString()
//                             + " ORDER BY CAST(SUBSTR(detail_value, length(grp_code)+2) as INT)";
//                         try
//                         {
//                             ret_dt = sh.Select(sql);
//                             r_too = ret_dt.Rows.Count;
//                             if (r_too > 0)
//                             {
//                                 string r_min = ret_dt.Rows[0]["val"].ToString();
//                                 string r_max = ret_dt.Rows[r_too-1]["val"].ToString();
//                                 DataView view = new DataView(ret_dt);
//                                 foreach (DataRowView row in view)
//                                 {
//                                     if (row["sign"].ToString() == "<=")
//                                     {
//                                         if (Convert.ToInt16(par) < Convert.ToInt16(r_min))
//                                         { ret_val = row["detail_value"].ToString().Substring(1,row["detail_value"].ToString().Length -1); }
//                                     }
//                                     else if (row["sign"].ToString() == ">=")
//                                     {
//                                         if (Convert.ToInt16(r_max) < Convert.ToInt16(par))
//                                         { ret_val = row["detail_value"].ToString().Substring(1, row["detail_value"].ToString().Length - 1); }
//                                     }
//                                     if ((Convert.ToInt16(conv1(r_min)) < Convert.ToInt16(conv1(par)) && Convert.ToInt16(conv1(par)) < Convert.ToInt16(conv1(r_max))) && (Convert.ToInt16(conv1(row["val"].ToString())) < Convert.ToInt16(conv1(par))))
//                                     {
//                                         ret_val = row["detail_value"].ToString();
//                                     }
//                                 }
//                             }
//                         }
//                         catch (Exception ex)
//                         {
//                             ex.ToString();
//                             DataTable dt = new DataTable();
//                             dt.Columns.Add("Error");
//                             dt.Rows.Add(ex.ToString());
//                         }
//                     }

//                 }
//                 catch (Exception ex)
//                 {
//                     ex.ToString();
//                     DataTable dt = new DataTable();
//                     dt.Columns.Add("Error");
//                     dt.Rows.Add(ex.ToString());
//                 }
//                 ///    /////
//                 conn.Close();
//             }
//             return ret_val;
//         }
