const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b0041eacd88a40",
  password: "",
  database: "heroku_acdbf20cdbf36f1"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;