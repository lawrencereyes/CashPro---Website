var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res) {
  res.render('home');
});

/* GET About page */
router.get('/AboutUs', function(req, res){
	res.render('aboutus');
});

/* GET Contact Us page */
router.get('/ContactUs', function(req, res){
	res.render('contactus');
});

/* GET Services page */
router.get('/Services', function(req, res){
	res.render('services');
});

/* DROPWDOWN MENU */
/* GET Accounting page */
router.get('/Services/Accounting', function(req, res){
	res.render('services');
});

/* GET Consulting page */
router.get('/Services/Consulting', function(req, res){
	res.render('services');
});

/* GET Taxes page */
router.get('/Services/Taxes', function(req, res){
	res.render('services');
});

/* GET Payroll page */
router.get('/Services/Payroll', function(req, res){
	res.render('services');
});
/*END OF DROPDOWN MENU */
module.exports = router;