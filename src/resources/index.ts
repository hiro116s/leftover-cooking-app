import RECIPE_DATA from '../resources/recipes.json';
import RecipeModel from '../model/RecipeModel.js';

const RECIPES_BY_ID: {[index: number]: RecipeModel } = {};
for (let i: number = 0; i < RECIPE_DATA.length; i++) {
    RECIPES_BY_ID[RECIPE_DATA[i].internalId] = RECIPE_DATA[i];
}

export { RECIPES_BY_ID };