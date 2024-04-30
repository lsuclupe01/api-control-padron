
var express = require('express');
var router = express.Router();

const ejemplo = require('../data/ejemplo.json')

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.json(ejemplo) 
});

module.exports = router;