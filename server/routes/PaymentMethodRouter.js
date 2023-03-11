var express = require('express');
var router = express.Router();
const title = 'PaymentMethod';

router.get('/', function (req, res) {
    res.render('Pages/paymentmethods', { title });
});


module.exports = router;