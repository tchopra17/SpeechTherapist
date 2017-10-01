var express = require('express');
var router = express.Router();

router.get('/home', function(req,res,next){
    res.render('Home2', {title:"home pape"});
});
module.exports = router;