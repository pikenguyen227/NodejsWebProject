var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var tempDB = mongoose.connection;

var User = require('../models/user');

// Register
router.get('/register', function(req, res) {
	res.render('register');
});

// Logged in
router.get('/home', function(req, res) {
	res.render('index');
});

// Login
router.get('/login', function(req, res) {
	res.render('login');
});

// Register
router.post('/register', function(req, res) {

	req.checkBody('email', 'Email is required!').notEmpty();
	req.checkBody('email', 'Email is not valid!').isEmail();
	req.checkBody('password', 'Password is required!').notEmpty();
	req.checkBody('retypepassword', 'Retype Password is required!').notEmpty();
	req.checkBody('school', 'Your school\'s name is required!').notEmpty();
	req.checkBody('degree', 'Your degree is required!').notEmpty();
	req.checkBody('major', 'Your major is required!').notEmpty();

	req.checkBody('retypepassword', 'Password do not match!').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors)
	{
		
	    res.render('register',{
		errors: errors
		});
	}
	else
	{
		var collection = tempDB.collection('users'); 
		collection.find({email: req.body.email}, {$exists: true}).toArray(function(err, doc)
		{     
		    if(doc)
		    {
	    		res.render('register',{
				errors: [{param: "email", msg: "Email address already registered", value: req.body.email}]
				});
		    }
		    else
		    {
		    	var newUser = new User({
					email: req.body.email,
					password: req.body.password,
					school: req.body.school,
					degree: req.body.degree,
					major: req.body.major

				});
				User.createUser(newUser, function(err, user){
					if(err) throw err;
					console.log(user)
				});
				req.flash('success_msg', 'You are registerd and can login');
				res.redirect('/');
				}
		});
	}
});

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password'},
	function (email, password, done) {
		User.getUserByEmail(email, function (err, user) {
			if (err) throw err;
			if (!user) {

				return done(null, false, { message: 'Account doesn\'t exists!' });
			}
			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));


passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/users/home', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/users/home');
	});


module.exports = router;