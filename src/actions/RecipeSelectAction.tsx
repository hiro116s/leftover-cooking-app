import { ActionType } from './ActionType';

export const selectRecipe: (recipeId: number) => RecipeSelectAction = (recipeId: number) => ({
    type: ActionType.RECIPE_SELECT,
    recipeId
});

export interface RecipeSelectAction {
    type: ActionType
    recipeId: number
}