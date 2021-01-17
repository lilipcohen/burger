const connection = require("./connection.js");

var orm = {
    selectAll: function () {
        const queryString = "";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function () {
        const queryString = "";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
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