var express = require("express");
var router = express.Router();
const controller = require("../controllers/UserController");

router.post("/", function(req, res, next) {
    controller.find(req, res);
});
router.post("/create", function(req, res, next) {
    controller.create(req, res);
});
router.delete("/:iduser", function(req, res, next) {
    controller.delete(req, res);
});
router.put("/:iduser", function(req, res, next) {
    controller.update(req, res);
});
router.get("/", function(req, res, next) {
    controller.findAll(req, res);
});
module.exports = router;