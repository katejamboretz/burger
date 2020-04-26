var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgObject = {
      burgers: data,
    };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/api/burgers", function (req, res) {
  var n = req.body.name;
  burger.insertOne(n, function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;
  var val = req.body.newDevouredState;
  console.log("id", id);

  burger.updateOne(id, val, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
