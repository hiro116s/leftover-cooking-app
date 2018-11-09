import { Action } from 'redux';
import { ActionType } from '../actions/ActionType';
import IngredientModel from '../model/IngredientModel';
import { IngredientState } from './State';

const INITIAL_STATE : IngredientState = {
    ingredients:[
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ゴボウ", "４００g"), 
        new IngredientModel("ニンジン", "２５０g")
    ]
};

export function ingredients(state: IngredientState = INITIAL_STATE, action: Action<ActionType>) {
    return state;
};