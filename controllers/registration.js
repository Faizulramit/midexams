var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

});

module.exports = router;