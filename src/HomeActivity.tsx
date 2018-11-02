import React from 'react';
import { View }  from 'react-native';
import { Recipe } from './components/Recipe';
import IngredientModel from './model/IngredientModel';
import RecipeModel from './model/RecipeModel';

export default class HomeActivity extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe recipe={new RecipeModel('焼き肉のタレだけ！スキレットでビビンバ風', 'https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993', [ new IngredientModel("ゴボウ", "４００g"), new IngredientModel("ニンジン", "２５０g")])} />
          <Recipe recipe={new RecipeModel('焼き肉のタレだけ！スキレットでビビンバ風', 'https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993', [ new IngredientModel("ゴボウ", "４００g"), new IngredientModel("ニンジン", "２５０g")])} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe recipe={new RecipeModel('焼き肉のタレだけ！スキレットでビビンバ風', 'https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993', [ new IngredientModel("ゴボウ", "４００g"), new IngredientModel("ニンジン", "２５０g")])} />
          <Recipe recipe={new RecipeModel('焼き肉のタレだけ！スキレットでビビンバ風', 'https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993', [ new IngredientModel("ゴボウ", "４００g"), new IngredientModel("ニンジン", "２５０g")])} />
        </View>

      </View>
    );
  }
}
