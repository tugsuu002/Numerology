const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./db/1.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

db.serialize(() => {
  db.each(
    `SELECT B.grp_code as t1, B.grp_name as t2, D.detail_advice as d1, D.detail_settings as d2 FROM Buleg B JOIN Desc D ON B.grp_code = D.grp_code`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.t1 + "\t" + row.t2 + "\t" + row.d1 + "\t" + row.d3);
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
