connection = require("../config/connection");

var orm = {
  selectAll: function (table, bb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      bb(result);
    });
  },

  insertOne: function (table, valName, valStatus, bb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
    connection.query(queryString, [table, valName, valStatus], function (
      err,
      result
    ) {
      if (err) throw err;
      bb(result);
    });
  },

  updateOne: function (table, id, col, val, bb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id=?";
    connection.query(queryString, [table, col, val, id], function (
      err,
      result
    ) {
      if (err) throw err;
      bb(result);
    });
  },
};

module.exports = orm;
