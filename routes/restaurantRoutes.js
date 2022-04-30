const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController.js');

router.get("/", function(req, res){
    res.redirect(about.html);
})

router.get('/dinnermenu', controller.dinner_page);
router.get('/lunchmenu', controller.lunch_page);

router.use(function(req, res){
    res.status(404);
    res.type('text/plain');
    res.send('404 not found');
})

router.use(function(err, req, res, next){
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error');
})

module.exports = router;