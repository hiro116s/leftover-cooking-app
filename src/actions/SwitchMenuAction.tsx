import { ActionType } from './ActionType';

export const switchMenu: (menuType: MenuType) => SwitchMenuAction = (menuType: MenuType) => ({
    type: ActionType.SWITCH_MENU,
    menuType
});

export interface SwitchMenuAction {
    type: ActionType
    menuType: MenuType
}

export enum MenuType {
    MAIN,
    REFRIGERATOR,
    HISTORY
}