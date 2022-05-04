const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')

router.get("/", controller.aboutus_page);

// router.get("/", function(req, res){
//     res.redirect(aboutus.html);
// })

//user login etc
router.get('/logIn', controller.show_login_page);
router.post('/logIn', login, controller.handle_login);

//basic users can see this page
router.get('/dinnermenu', controller.dinner_page);
router.get('/lunchmenu', controller.lunch_page);

//an admin can update recipes 
router.get('/newRecipe', verify, controller.new_recipe);
router.post('/newRecipe', verify, controller.post_new_recipe);

//admin dinnermenu and lunch menu pages
router.get("/loggedIn",verify, controller.loggedIn_aboutUs);
router.get("/adminDinnerMenu",verify, controller.admin_dinnerMenu);
router.get("/adminLunchMenu",verify, controller.admin_lunchMenu);

//admin update pages
router.get('/recipe/:id', verify, controller.updateRecipe);
router.post('/updateRecipe/:id', verify, controller.updateRecipes);
router.post('/deleteRecipe/:id', verify, controller.deleteRecipe);

//an admin can view these pages
// router.get('/adminDinnerMenu', authenticate, controller.get_recipes);
// router.post('/adminDinnerMenu', authenticate, loggedIn, controller.post_recipes);
// router.get('/recipe/:id', authenticate, controller.updateRecipes);
// router.post('/updateRecipe/:id', authenticate, loggedIn, controller.updateRecipe);
// router.post('/deleteRecipe/:id', authenticate, loggedIn, controller.deleteRecipe);

router.get("/logout",verify, controller.logout);

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