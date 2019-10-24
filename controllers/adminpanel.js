var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('adminpanel/index');
});

router.get('/addbook', function(request, response){
	response.render('adminpanel/addbook');
});

router.get('/editbook', function(request, response){
	response.render('adminpanel/editbook');
});

router.get('/deletebook', function(request, response){
	response.render('adminpanel/deletebook');
});
router.get('/bookdetails', function(request, response){
	response.render('adminpanel/bookdetails');
});
router.get('/addcustomer', function(request, response){
	response.render('adminpanel/addcustomer');
});
router.get('/deletecustomer', function(request, response){
	response.render('adminpanel/deletecustomer');
});



router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

});

module.exports = router;