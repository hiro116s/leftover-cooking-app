import { Action } from 'redux';
import { ActionType, isRecipeSelectAction } from '../actions/ActionType';
import { StackedRecipeState } from './State';

const INITIAL_STATE : StackedRecipeState = {
    recipeIds: []
};

export function stackedRecipe(state: StackedRecipeState = INITIAL_STATE, action: Action<ActionType>): StackedRecipeState {
    if (isRecipeSelectAction(action)) {
        if (state.recipeIds.includes(action.recipeId)) {
            const index: number = state.recipeIds.indexOf(action.recipeId);
            return {recipeIds: [...state.recipeIds.slice(0, index), ...state.recipeIds.slice(index + 1)]}
        } else {
            return {recipeIds: [...state.recipeIds, action.recipeId]};
        }
    } else {
        return state;
    }
};