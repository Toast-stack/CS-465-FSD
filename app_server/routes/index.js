var express = require('express');
var router = express.Router('../controllers/main');
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
