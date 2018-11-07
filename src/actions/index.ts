export const switchMenu: (menuType: MenuType) => any = (menuType: MenuType) => ({
    type: 'TOGGLE_MENU',
    menuType
});

export enum MenuType {
    MAIN,
    REFRIGERATOR,
    HISTORY
}