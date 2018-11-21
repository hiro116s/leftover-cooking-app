import { MenuType } from '../actions/SwitchMenuAction';
import IngredientModel from '../model/IngredientModel';
import RecipeHistoryModel from '../model/RecipeHistoryModel';

export interface MenuState {
    menuType : MenuType
}

export interface IngredientState {
    ingredients: Array<IngredientModel>
}

export interface SelectedRecipeState {
    recipeIds: [number, number, number, number]
}

export interface StackedRecipeState {
    recipeIds: Array<number>
}

export interface RecipeHistoryState {
    histories: Array<RecipeHistoryModel>
}

export interface AllState {
    menu: MenuState,
    ingredients: IngredientState,
    selectedRecipe: SelectedRecipeState,
    stackedRecipe: StackedRecipeState,
    recipeHisotry: RecipeHistoryState
}
