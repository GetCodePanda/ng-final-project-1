import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Recipe name 1', 'Description of recipe 1', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
    new Recipe('Recipe name 2', 'Description of recipe 2', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
    new Recipe('Recipe name 3', 'Description of recipe 3', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg')
  ];

  getRecipe() {
      return this.recipes.slice();
      //intention of slice() here is just to pass the array by value
      //By default arrays are handled as reference in javascript 
  }
}