var express = require('express');
var router = express.Router();

router.get('/lessons', function(req, res, next) {
  	res.render('lessons', { title: 'Lesson Modules'});
});

module.exports = router;
