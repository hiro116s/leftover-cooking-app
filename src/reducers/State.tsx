import { MenuType } from '../actions/SwitchMenuAction';

export interface MenuState {
    menuType : MenuType
}

export interface AllState {
    menu: MenuState
}
