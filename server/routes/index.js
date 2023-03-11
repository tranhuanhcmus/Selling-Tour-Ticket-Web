var express = require("express");
var router = express.Router();

const title = "HomePage";
const user = "Huan";
const Place = ["TP Cà Mau", "TP Hồ Chí Minh", "TP Đà Nẵng", "TP Hà Nội"];

router.get("/", function (req, res, next) {
    res.render("Pages/homePage", { title, user, Place });
});

module.exports = router;