var express = require('express');
var router = express.Router();

var computationData;
var titleText = 'Bonus - Computation';

/* GET computation page. */
router.get('/', function(req, res, next) {
  if( typeof(req.query.x) !== 'undefined') {
    computationData = {
      title: titleText,
      x: req.query.x
    }
  } else {
    computationData = {
      title: titleText
    }
  }
  res.render('computation', computationData);
});

module.exports = router;
