var express = require("express");
var router = express.Router();
const controller = require("../controllers/chuyenxeController");

router.get("/:idchuyenxe", function(req, res, next) {
    controller.findByPk(req, res);
});
router.post("/create", function(req, res, next) {
    controller.create(req, res);
});
router.delete("/:idchuyenxe", function(req, res, next) {
    controller.delete(req, res);
});
router.put("/:idchuyenxe", function(req, res, next) {
    controller.update(req, res);
});
router.get("/", function(req, res, next) {
    controller.findAll(req, res);
});

module.exports = router;