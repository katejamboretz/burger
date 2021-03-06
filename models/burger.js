var orm = require("../config/orm.js");

var burger = {
  selectAll: function (bb) {
    orm.selectAll("burgers", function (res) {
      bb(res);
    });
  },

  insertOne: function (name, bb) {
    orm.insertOne("burgers", name, 1, bb, function (res) {
      bb(res);
    });
  },

  updateOne: function (ID, value, bb) {
    orm.updateOne("burgers", ID, "devoured", value, bb, function (res) {
      bb(res);
    });
  },
};

module.exports = burger;
