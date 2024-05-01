
var express = require('express');
var router = express.Router();

const equipos = require('../data/equipos.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a equipos');

  res.json(equipos) 
});

router.get('/images', function(req, res, next) {
  //res.send('respond with a equipos');

  res.json(equipos) 
});
module.exports = router;