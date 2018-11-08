import { MenuType, SwitchMenuAction } from '../actions/SwitchMenuAction';
import {ActionType, isSwitchMenuAction } from '../actions/ActionType';
import { Action } from 'redux';

export interface MenuState {
    menuType : MenuType
}

export default function menu(state: MenuState = {menuType: MenuType.MAIN}, action: Action<ActionType>) {
    if (isSwitchMenuAction(action)) {
        return { menuType: action.menuType };
    } else {
        return state;
    }
};