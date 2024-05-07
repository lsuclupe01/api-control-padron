
var express = require('express');
var router = express.Router();

const padron = require('../data/padron.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a equipos');
  res.json(padron) 
});

module.exports = router;