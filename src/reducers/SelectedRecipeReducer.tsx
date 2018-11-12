import { Action } from 'redux';
import { ActionType, isRecipeSelectAction } from '../actions/ActionType';
import { SelectedRecipeState } from './State';

const INITIAL_STATE : SelectedRecipeState = {
    recipeIds: [12, 16, 42, 91]
};

export function selectedRecipe(state: SelectedRecipeState = INITIAL_STATE, action: Action<ActionType>) {
    if (isRecipeSelectAction(action)) {
        return state;
    } else {
        return state;
    }
};