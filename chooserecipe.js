// The chooseRecipe function loops over the recipes from the recipes parameter.
// If ingredientCheck helper function returns true for bakeryA and bakeryB, it returns the recipe.name

// This ingredientCheck helper function returns true if the passed bakery array parameter contains one ingredient from an ingredientArr.
// It compares each ingredient from the bakery parameter to every ingredient in the ingredientArr passed parameter.  
const ingredientCheck = function(bakery, ingredientArr){
  for(let ingredient of bakery){
    for(let ingr of ingredientArr){
      if(ingredient === ingr){
        return true;
      }
    }
  }
}
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(let recipe of recipes){
    if(ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)){
      return recipe.name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));