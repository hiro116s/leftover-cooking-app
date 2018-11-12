import { Action } from 'redux';
import { SwitchMenuAction } from './SwitchMenuAction';
import { RecipeSelectAction } from './RecipeSelectAction';

export function isSwitchMenuAction(action: Action<ActionType>) : action is SwitchMenuAction {
    return action.type === ActionType.SWITCH_MENU;
}

export function isRecipeSelectAction(action: Action<ActionType>) : action is RecipeSelectAction {
    return action.type == ActionType.RECIPE_SELECT;
}

export enum ActionType {
    SWITCH_MENU,
    RECIPE_SELECT
}
