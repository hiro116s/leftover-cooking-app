import { MenuType } from "../actions";

export interface MenuState {
    menuType : MenuType
}

export default function menuReducer(state: MenuState = {menuType: MenuType.MAIN}, action: any) {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE_MENU':
            return { menuType: action.menuType };
        default: 
            return state;
    }
};