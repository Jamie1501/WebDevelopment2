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
  db.getAllLunch()
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
  db.getAllDinner()
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
  res.redirect("/loggedIn");
};

exports.logout = function (req, res) {
  res.clearCookie("jwt").status(200).redirect("/");
};
