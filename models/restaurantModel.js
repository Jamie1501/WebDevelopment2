const nedb = require("nedb");
const { all } = require("../routes/restaurantRoutes");

class Restaurant {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("DB connected to " + dbFilePath);
    } else {
      this.db = new nedb();
    }
  }
  init() {
    this.db.insert({
      dishName: "Testing 1",
      dishDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
      menuCategory: "Lunch",
      ingredients: "ingredient 1, ingredient 2, ingredient 3",
      allergies: "Nuts, Dairy",
      cost: 40,
      isAvailable: true
    });
    console.log("db entry Testing 1 inserted");

    this.db.insert({
      dishName: "Testing 2",
      dishDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
      menuCategory: "Dinner",
      ingredients: "ingredient 1, ingredient 2",
      allergies: "Dairy",
      cost: 25,
      isAvailable: true
    });
    console.log("db entry Testing 2 inserted");

    this.db.insert({
      dishName: "Testing 3",
      dishDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      menuCategory: "Dinner",
      ingredients: "ingredient 1",
      allergies: "Nuts, Dairy",
      cost: 15,
      isAvailable: true
    });
    console.log("db entry Testing 3 inserted");

    this.db.insert({
      dishName: "Testing 4",
      dishDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      menuCategory: "Dinner",
      ingredients: "ingredient 1, ingredient 2, ingredient 3",
      allergies: "Nuts, Dairy",
      cost: 15,
      isAvailable: false
    });
    console.log("db entry Testing 4 inserted");

    this.db.insert({
      dishName: "Testing 5",
      dishDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      menuCategory: "Dinner",
      ingredients: "ingredient 1, ingredient 2, ingredient 3",
      allergies: "Nuts",
      cost: 15,
      isAvailable: false
    });
    console.log("db entry Testing 5 inserted");

    this.db.insert({
      dishName: "Testing 6",
      dishDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      menuCategory: "Lunch",
      ingredients: "ingredient 1, ingredient 2, ingredient 3",
      allergies: "Nuts, Dairy",
      cost: 15,
      isAvailable: true
    });
    console.log("db entry Testing 6 inserted");
  }

  //will return all recipes from the db
  getAllRecipes() {
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({}, function (err, recipes) {
        //if error occurs then the promise will be rejected
        if (err) {
          reject(err);
          //if no error occurs then we can resolve the promise and teh data will be returned
        } else {
          resolve(recipes);
          //to see what the returned data looks like
          console.log("function all() returns: ", recipes);
        }
      });
    });
  }

  getAllDinner() {
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({ menuCategory: "Dinner", isAvailable: true}, function (err, dinnerRecipes) {
        //if error occurs then the promise will be rejected
        if (err) {
          reject(err);
          //if no error occurs then we can resolve the promise and teh data will be returned
        } else {
          resolve(dinnerRecipes);
          //to see what the returned data looks like
          console.log("function all() returns: ", dinnerRecipes);
        }
      });
    });
  }

  
  getAllLunch() {
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({ menuCategory: "Lunch", isAvailable: true}, function (err, lunchRecipes) {
        //if error occurs then the promise will be rejected
        if (err) {
          reject(err);
          //if no error occurs then we can resolve the promise and teh data will be returned
        } else {
          resolve(lunchRecipes);
          //to see what the returned data looks like
          console.log("function all() returns: ", lunchRecipes);
        }
      });
    });
  }



addRecipe(dishName, dishDescription, menuCategory, ingredients, allergies, cost) {
  var entry = {
    dishName: dishName,
    dishDescription: dishDescription,
    menuCategory: menuCategory,
    ingredients: ingredients,
    allergies: allergies,
    cost: cost,
    isAvailable: true
          };
  console.log('entry created', entry);
  this.db.insert(entry, function(err, doc) {
          if (err) {
              console.log('Error inserting document', subject);
              } else {
              console.log('document inserted into the database', doc);
          }
  })
}  

}

//makes the module visible outside
module.exports = Restaurant;
