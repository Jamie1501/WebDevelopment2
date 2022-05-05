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
      dishName: "Chilli con carne",
      dishDescription:
        "This great chilli recipe has to be one of the best dishes to serve to friends for a casual get-together. An easy sharing favourite that uses up storecupboard ingredients.",
      menuCategory: "Lunch",
      ingredients: "1 large onion, 1 red pepper, 2 garlic cloves, 1 tbsp oil, 1 heaped tsp hot chilli powder (or 1 level tbsp if you only have mild), 1 tsp paprika, 1 tsp ground cumin, 500g lean minced beef, 1 beef stock cube, 400g can chopped tomatoes, ½ tsp dried marjoram, 1 tsp sugar (or add a thumbnail-sized piece of dark chocolate along with the beans instead, see tip), 2 tbsp tomato purée, 410g can red kidney beans, plain boiled long grain rice , to serve, soured cream , to serve",
      allergies: "",
      cost: 25.99,
      isAvailable: true
    });
    console.log("db entry Chilli con carne inserted");

    this.db.insert({
      dishName: "spaghetti bolognese",
      dishDescription:
        "Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce. This recipe comes courtesy of BBC Good Food user Andrew Balmer",
      menuCategory: "Dinner",
      ingredients: "1 tbsp olive oil, 4 rashers smoked streaky bacon, finely chopped, 2 medium onions, finely chopped, 2 carrots, trimmed and finely chopped, 2 celery sticks, finely chopped, 2 garlic cloves finely chopped, 2-3 sprigs rosemary leaves picked and finely chopped, 500g beef mince, For the bolognese sauce 2 x 400g tins plum tomatoes small pack basil leaves picked, ¾ finely chopped and the rest left whole for garnish, 1 tsp dried oregano, 2 fresh bay leaves, 2 tbsp tomato purée, 1 beef stock cube, 1 red chilli deseeded and finely chopped (optional), 125ml red wine, 6 cherry tomatoes sliced in half, To season and serve 75g parmesan grated plus extra to serve, 400g spaghetti, crusty bread to serve (optional)",
      allergies: "Dairy",
      cost: 23.99,
      isAvailable: true
    });
    console.log("db entry spaghetti bolognese inserted");

    this.db.insert({
      dishName: "spaghetti carbonara",
      dishDescription:
        "Discover how to make superb spaghetti carbonara. This cheesy pasta dish is an Italian favourite and with the right technique, you can make it perfect every time",
      menuCategory: "Dinner",
      ingredients: "100g pancetta, 50g pecorino cheese, 50g parmesan, 3 large eggs, 350g spaghetti, 2 plump garlic cloves, peeled and left whole, 50g unsalted butter, sea salt and freshly ground black pepper",
      allergies: "Dairy",
      cost: 20,
      isAvailable: true
    });
    console.log("db entry spaghetti carbonara inserted");

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
      dishName: "Toad in the Hole",
      dishDescription:
        "Serve this comforting classic made with chipolata sausages and a simple batter, its easy enough that kids can help make it.",
      menuCategory: "Lunch",
      ingredients: "12 chipolatas, 1 tbsp sunflower oil, For the batter 140g plain flour, 2 eggs, 175ml semi-skimmed milk",
      allergies: "Nuts, Dairy",
      cost: 25.99,
      isAvailable: true
    });
    console.log("db entry Testing 6 inserted");

    this.db.insert({
      dishName: "Cottage Pie",
      dishDescription:
        "This great-value family favourite freezes beautifully and is a guaranteed crowd-pleaser.",
      menuCategory: "Dinner",
      ingredients: "3 tbsp olive oil, 1 ¼kg beef mince, 2 onions, finely chopped, 3 carrots, chopped, 3 celery sticks, chopped, 2 garlic cloves, finely chopped, 3 tbsp plain flour, 1 tbsp tomato purée, large glass red wine (optional), 850ml beef stock 4 tbsp Worcestershire sauce, few thyme sprigs, 2 bay leaves, For the mash 1.8kg potatoes, chopped, 225ml milk, 25g butter, 200g strong cheddar, grated, freshly grated nutmeg",
      allergies: "Dairy",
      cost: 34.99,
      isAvailable: true
    });
    console.log("db entry Cottage Pie inserted");

    this.db.insert({
      dishName: "Pizza Margherita",
      dishDescription:
        "Even a novice cook can master the art of pizza with our simple step-by-step guide. Bellissimo!.",
      menuCategory: "Lunch",
      ingredients: "For the base 300g strong bread flour, 1 tsp instant yeast (from a sachet or a tub), 1 tsp salt, 1 tbsp olive oil, plus extra for drizzling, For the tomato sauce 100ml passata, handful fresh basil or 1 tsp dried, 1 garlic clove, crushed, For the topping, 125g ball mozzarella, sliced, handful grated or shaved parmesan (or vegetarian alternative), handful of cherry tomatoes, halved, To finish handful of basil leaves (optional)",
      allergies: "Dairy",
      cost: 15.99,
      isAvailable: true
    });
    console.log("db entry Cottage Pie inserted");

    this.db.insert({
      dishName: "macaroni cheese",
      dishDescription:
        "This perfect baked macaroni cheese recipe comes with a creamy cheese sauce, a hint of mustard and uses leftover French stick for its crunchy topping.",
      menuCategory: "Lunch",
      ingredients: "50g baguette, cut into small chunks, 2 tbsp butter, plus 1 tbsp melted, 350g spiral or other short pasta, 1 garlic clove, finely chopped, 1 tsp English mustard powder, 3 tbsp plain flour, 500ml whole milk, 250g vegetarian mature cheddar, grated, 50g parmesan (or vegetarian alternative), grated",
      allergies: "Dairy",
      cost: 20.99,
      isAvailable: true
    });
    console.log("db entry macaroni cheese inserted");

    this.db.insert({
      dishName: "Fish Pie",
      dishDescription:
        "A simple fish pie recipe thats quick and easy to prepare. Portion into ramekins and freeze for quick toddler meals or cook in a big dish for the perfect family supper.",
      menuCategory: "Dinner",
      ingredients: "1kg Maris Piper potatoes, peeled and halved, 400ml milk, plus a splash, 25g butter, plus a knob, 25g plain flour, 4 spring onions, finely sliced, 1 x pack fish pie mix (cod, salmon, smoked haddock etc, weight around 320g-400g depending on pack size), 1 tsp Dijon or English mustard, ½ a 25g pack or a small bunch chives, finely snipped, handful frozen sweetcorn, handful frozen petits pois, handful grated cheddar",
      allergies: "Dairy",
      cost: 24.99,
      isAvailable: true
    });
    console.log("db entry Fish Pie inserted");

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

  getAllDinnerAdmin() {
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({ menuCategory: "Dinner"}, function (err, dinnerRecipes) {
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

  
  getAllLunchAdmin() {
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({ menuCategory: "Lunch"}, function (err, lunchRecipes) {
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

// findById(id){
// this.db.find({'_id': id})

// }

getRecipeById(id) {
  return new Promise((resolve, reject) => {
      this.db.find({ _id: id }, function(err, recipe) {
      if (err) {
          reject(err);
      } else {
          resolve(recipe);
          console.log('getRecipeById returns: ', recipe);
  }
});
});
}

updateRecipe(dishName, dishDescription, menuCategory, ingredient, allergies, cost, isAvailable, _id){
    this.db.update({_id:_id},{
      $set:{
        dishName: dishName,
        dishDescription:dishDescription,
        menuCategory: menuCategory,
        ingredient:ingredient,
        allergies: allergies,
        cost: cost,
        isAvailable: isAvailable,
        _id: _id
      }
    }, {upsert: true}, function(err, doc){
      if(err){
        console.log("could not add ", dishName);
      } else{
        console.log(dishName, "Edit Completed");
      }
    });
}

//find the required dish
searchForDish(query, cb){
this.db.findOne(query, cb)
}

deleteDish(query, options, cb){
  this.db.remove(query, options, cb);
}

loadDb(){
  this.db.loadDatabase();
}

}

//makes the module visible outside
module.exports = Restaurant;
