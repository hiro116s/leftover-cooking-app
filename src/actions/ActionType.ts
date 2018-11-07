import { Action } from 'redux';
import { SwitchMenuAction } from './SwitchMenuAction';

export function isSwitchMenuAction(action: Action<ActionType>) : action is SwitchMenuAction {
    return action.type === ActionType.SWITCH_MENU;
}

export enum ActionType {
    SWITCH_MENU
}
