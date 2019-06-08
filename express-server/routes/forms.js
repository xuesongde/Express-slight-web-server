var express = require('express');
var router = express.Router();

/* GET submit listing. */
router.post('/', function(req, res, next) {
  res.jsonp({ user: 'tobi' })
});
/* GET users information listing. */
router.get('/sign-info', function(req, res, next) {
  res.jsonp({ status: 200 })
});
module.exports = router;
