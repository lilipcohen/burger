const connection = require("./connection.js");

function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
        }
        cb(result);
        });
    },
    insertOne: function (tableInput, colName, vals, cb) {
        const queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += colName.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function () {
        const queryString = "";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;