import { MenuType } from '../actions/SwitchMenuAction';
import IngredientModel from '../model/IngredientModel';

export interface MenuState {
    menuType : MenuType
}

export interface IngredientState {
    ingredients: Array<IngredientModel>
}

export interface AllState {
    menu: MenuState,
    ingredients: IngredientState
}
