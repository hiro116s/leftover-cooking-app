import { MenuType } from '../actions/SwitchMenuAction';
import { ActionType, isSwitchMenuAction } from '../actions/ActionType';
import { Action } from 'redux';
import { MenuState } from './State';

export function menu(state: MenuState = {menuType: MenuType.MAIN}, action: Action<ActionType>) {
    if (isSwitchMenuAction(action)) {
        return { menuType: action.menuType };
    } else {
        return state;
    }
};