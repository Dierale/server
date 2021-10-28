var express = require('express');
var router = express.Router();
var value = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 1;
  res.send(`Number of User accesses are: ${value}`);
});

module.exports = router;
