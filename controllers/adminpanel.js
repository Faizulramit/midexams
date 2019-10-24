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

router.get('?editcustomer', function(request, response){
		response.render('adminpanel/editcustomer');
	});
});
router.get('/addshopping', function(request, response){
	response.render('adminpanel/addshopping');
});
router.get('/deleteshopping', function(request, response){
	response.render('adminpanel/deleteshopping');
});




router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

});

module.exports = router;