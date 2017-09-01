var express = require('express');
var router = express.Router();

/* HOME PAGE */
// GET Home page.
router.get('/', function(req, res) {
  res.render('home');
});

// GET About page 
router.get('/AboutUs', function(req, res){
	res.render('aboutus');
});

// GET Contact Us page
router.get('/ContactUs', function(req, res){
	res.render('contactus');
});

// GET Services page
router.get('/Services', function(req, res){
	res.render('services');
});
/* END HOME PAGE */

/* SERVICES */
// GET Accounting page 
router.get('/Accounting', function(req, res){
	res.render('accounting');
});

// GET Consulting page 
router.get('/Consulting', function(req, res){
	res.render('consulting');
});

// GET Taxes page 
router.get('/Taxes', function(req, res){
	res.render('taxes');
});

// GET Audit page 
router.get('/Audit', function(req, res){
	res.render('audit');
});

// GET Human Resources page 
router.get('/HR', function(req, res){
	res.render('HR');
});

// GET Software Developing page 
router.get('/Software', function(req, res){
	res.render('software');
});
/* END OF SERVICES */

module.exports = router;