const restaurantDAO = require("../models/restaurantModel");
// const userDao = require("../models/userModel.js");

const db = new restaurantDAO();

db.init();

exports.show_login_page = function (req, res) {
  res.render("user/logIn");
};

exports.handle_login = function (req, res) {
  // res.redirect("/new");
  res.render("adminRecipes", {
    title: "Recipes",
    user: "user",
  });
};

exports.aboutus_page = function (req, res) {
  db.getAllRecipes()
    .then((list) => {
      res.render("recipes", {
        title: "Recipe List",
        recipes: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.loggedIn_aboutUs = function (req, res) {
  db.getAllRecipes()
    .then((list) => {
      res.render("recipes", {
        title: "Recipe List",
        recipes: list,
        user: "user"
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.dinner_page = function (req, res) {
  db.getAllDinner()
    .then((list) => {
      res.render("dinnerPage", {
        title: "Dinner Menu",
        recipes: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.lunch_page = function (req, res) {
  db.getAllLunch()
    .then((list) => {
      res.render("lunchPage", {
        title: "Lunch Menu",
        recipes: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.admin_lunchMenu = function (req, res) {
  db.getAllLunchAdmin()
    .then((list) => {
      res.render("adminlunchPage", {
        title: "Lunch Menu",
        recipes: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.admin_dinnerMenu = function (req, res) {
  db.getAllDinnerAdmin()
    .then((list) => {
      res.render("adminDinnerPage", {
        title: "Dinner Menu",
        recipes: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.new_recipe = function (req, res) {
  res.render("newRecipe", {
    title: "New Recipe",
  });
};

exports.post_new_recipe = function (req, res) {
  console.log("processing post-new-entry controller");
  if (!req.body.dishDescription) {
    response.status(400).send("Entries must have a description.");
    return;
  }
  db.addRecipe(
    req.body.dishName,
    req.body.dishDescription,
    req.body.menuCategory,
    req.body.ingredients,
    req.body.allergies,
    req.body.cost,
    req.body.isAvailable
  );
  res.redirect("/adminLunchMenu");
};



//update and delete recipes

// exports.show_user_entries = function(req, res) {
//   console.log('filtering author name', req.params.author);
//   let user = req.params.author;
//   db.getEntriesByUser(user).then(
//       (entries) => {
//        res.render('entries', {
//           'title': 'Guest Book',
//            'entries': entries
//   });
// }).catch((err) => {
//   console.log('error handling author posts', err);
//   });
// }

//shows update recipes page
// exports.get_updateRecipe = function (req, res) {

//   console.log('filtering by id', req.params._id);
//   const id = req.params._id;

//   db.getRecipesById(id).then((recipe) =>{
//     res.render('updateRecipe', {
//       recipe: recipe
//     });
//   });
// }

exports.get_updateRecipe = function(req, res){
  restaurantDAO.searchForDish({_id: req.params.id}, function(err, recipe){
    console.log('filtering by id', req.params._id);
    console.log(recipe)
    if(err){
      console.log(err)
    }else{
      res.render('/editRecipe',{
        recipe: recipe
      })
    }
  });
}

exports.post_updateRecipe = function(req, res){
      restaurantDAO.updateRecipe({_id: req.params.id},{
        $set: {
        name: req.body.dishName,
        dishDescription:req.body.dishDescription,
        menuCategory: req.body.menuCategory,
        ingredients: req.body.ingredients,
        allergies: req.body.allergies,
        cost: req.body.cost,
        isAvailable: true
        }
      },
      {},
      function(err){
        if(err){
          console.log(err)
        }else{
          restaurantDAO.loadDb()
          console.log('Recipe is updated:', req.params.id);
          res.redirect('/adminRecipes');
          
        }
      }
      );
    }


//deletes recipes from db
exports.deleteRecipe = async function (req, res) {
  restaurantDAO.deleteDish({_id: req.params.id}, {}, (err, numRemoved) =>{
    if(err){
      console.log(err)
    }else{
      res.redirect('/adminLunchMenu')
    }
  })
};

exports.logout = function (req, res) {
  res.clearCookie("jwt").status(200).redirect("/");
};
