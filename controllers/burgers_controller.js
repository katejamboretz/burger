var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgObject = {
      burgers: data,
    };
    console.log(burgObject);
    res.render("filename", burgObject);
  });
});

router.post("/api/burgers", function (req, res) {
  var n = req.body.name;
  burger.insertOne(n, function (result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = req.params.id;
  var col = req.body.col;
  var val = req.body.val;
  console.log("condition", condition);

  burger.updateOne(condition, col, val, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
