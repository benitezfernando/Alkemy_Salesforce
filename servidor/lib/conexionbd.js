var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "blogs",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Db connected");
  }
});

module.exports = connection;
