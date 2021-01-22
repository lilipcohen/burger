const connection = require("./connection.js");

function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
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
        let queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += colName.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableInput, objColVals, condition, cb) {
        let queryString = "UPDATE " + tableInput;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;