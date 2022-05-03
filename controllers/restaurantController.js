const restaurantDAO = require("../models/restaurantModel");
const db = new restaurantDAO();

db.init();

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
  db.addRecipe(req.body.dishName, req.body.dishDescription, req.body.menuCategory, req.body.ingredients, req.body.allergies, req.body.cost, req.body.isAvailable);
  res.redirect("/");
};
