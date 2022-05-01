const restaurantDAO = require('../models/restaurantModel');
const db = new restaurantDAO();

db.init();

exports.aboutus_page = function(req, res) {
    db.getAllRecipes()
        .then((list) => {
            res.render('recipes', {
                'title': 'Recipe List',
                'recipes': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.dinner_page = function(req,res){
    db.getAllDinner()
        .then((list) => {
            res.render('dinnerPage', {
                'title': 'Dinner Menu',
                'recipes': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.lunch_page = function(req,res){
    db.getAllLunch()
        .then((list) => {
            res.render('dinnerPage', {
                'title': 'Dinner Menu',
                'recipes': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.lunch_page = function(req,res){
    res.send('<h1>Not yet implemented: show a list of dinner menu items.</h>');
}