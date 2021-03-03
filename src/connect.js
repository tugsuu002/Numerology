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
    `SELECT id as iid,
            detail_value as name
           FROM Desc`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.iid + "\t" + row.name);
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
