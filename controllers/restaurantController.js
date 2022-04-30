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