export const toggleMenu: (menuType: MenuType) => any = (menuType: MenuType) => ({
    type: 'TOGGLE_MENU',
    menuType
});

export enum MenuType {
    MAIN,
    REFRIGERATOR,
    HISTORY
}