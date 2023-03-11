var express = require('express');
var router = express.Router();
const controller = require('../controllers/phieuxeController');

router.post('/create', function (req, res, next){
    controller.create(req, res)
});
router.get('/', function (req, res, next){
    controller.findAll(req, res)
});
router.get('/:id', function (req, res, next){
    controller.findByPk(req, res)
});
router.put('/:id', function (req, res, next){
    controller.update(req, res)
});
router.delete('/:id', function (req, res, next){
    controller.delete(req, res)
});

module.exports = router;