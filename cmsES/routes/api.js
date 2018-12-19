var express = require('express');
var router = express.Router();

var contact_us = require('./home'); 
router.use('/home', home);

var contact_us = require('./contact_us'); 
router.use('/contact_us', contact_us);

var contact_us = require('./about_us'); 
router.use('/about_us', about_us);

var admin_login = require('./admin_login');
router.use('/login', admin_login);
var admin_logout = require('./admin_logout');
router.use('/logout', admin_logout);
var add_admin = require('./add_admin');
router.use('/add', add_admin);

var blog = require('./blog/blog.js');
router.use('/blog',blog);

var career = require('./career/career.js');
router.use('/career',career);

var equipment = require('./equipment/equipment.js');
router.use('/equipment',equipment);

var enquiry = require('./enquiry/enquiry.js');
router.use('/enquiry',enquiry);

var enquiry = require('./solution');
router.use('/solution',solution);

module.exports = router;