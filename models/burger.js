var orm = require("../config/orm.js");

var burger = {
  selectAll: function (bb) {
    orm.selectAll("burgers", function (res) {
      bb(res);
    });
  },

  insertOne: function (name, status, bb) {
    orm.insertOne("burgers", name, status, bb, function (res) {
      bb(res);
    });
  },

  updateOne: function (ID, column, value, bb) {
    orm.updateOne("burgers", ID, column, value, bb, function (res) {
      bb(res);
    });
  },
};

module.exports = burger;
