const nedb = require("nedb");

class Restaurant {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("DB connected to " + dbFilePath);
    } else{
        this.db = new nedb();
    }
  }
  init(){
      this.db.insert({
          dishName: 'Testing 1',
          dishDescription: 'very good dish',
          dishCategory: 'Starter',
          ingredients: ['ing1','ing2','ing3'],
          allergies: ['allergy4', 'allergy5'],
          cost: 40,
          isAvailable: true
      });
      console.log('db entry Testing 1 inserted');

      this.db.insert({
        dishName: 'Testing 2',
        dishDescription: 'good dish',
        dishCategory: 'Main',
        ingredients: ['ing1','ing2','ing3'],
        allergies: ['allergy2', 'allergy3'],
        cost: 25,
        isAvailable: false
    });
    console.log('db entry Testing 2 inserted');
  }

  //will return all entries to the db but will only show the ones that have is available true
  getAllRecipes(){
    //return a promise object, this can then be resolved or rejected
    return new Promise((resolve, reject) => {
        //use the find() function of the database to get the data,
        //error first callback function, err for error, entries for data
        this.db.find({}, function(err, recipes){
            //if error occurs then the promise will be rejected
            if(err){
                reject(err);
                //if no error occurs then we can resolve the promise and teh data will be returned
            }else{
                resolve(recipes);
                //to see what the returned data looks like
                console.log('function all() returns: ', recipes);
            }
        })
    })
  }
}

//makes the module visible outside
module.exports = Restaurant;
