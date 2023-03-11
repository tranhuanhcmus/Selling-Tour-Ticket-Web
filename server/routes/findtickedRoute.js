var express = require('express');
var router = express.Router();
const controller = require('../controllers/findtickedController');



router.get('/', function (req, res, next) {
  controller.showlist(req, res)
});


module.exports = router;