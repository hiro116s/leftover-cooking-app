import { combineReducers } from 'redux'
import { menu } from './MenuReducer';
import { ingredients } from './IngredientsReducer';

export default combineReducers({
    menu,
    ingredients
})
