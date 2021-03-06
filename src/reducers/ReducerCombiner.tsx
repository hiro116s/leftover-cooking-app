import { combineReducers } from 'redux'
import { menu } from './MenuReducer';
import { ingredients } from './IngredientsReducer';
import { selectedRecipe } from './SelectedRecipeReducer';
import { stackedRecipe } from './StackedRecipesReducer';
import { recipeHistory } from './RecipeHistoryReducer';

export default combineReducers({
    menu,
    ingredients,
    selectedRecipe,
    stackedRecipe,
    recipeHistory,
})
