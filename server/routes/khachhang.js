var express = require('express');
var router = express.Router();
const controller = require('../controllers/KhachhangController');

router.get('/:idkhachhang', function (req, res, next) {
    controller.findByPk(req, res)
});
router.post('/create', function (req, res, next) {
    controller.create(req, res)
});
router.delete('/:idkhachhang', function (req, res, next) {
    controller.delete(req, res)
});
router.put('/:idkhachhang', function (req, res, next) {
    controller.update(req, res)
});
router.get('/', function (req, res, next) {
    controller.findAll(req, res)
});

module.exports = router;
