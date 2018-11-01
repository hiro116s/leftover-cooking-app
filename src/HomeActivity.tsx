import React from 'react';
import { View }  from 'react-native';
import { Recipe } from './components/Recipe';
import Ingredient from './model/Ingredient';

export default class HomeActivity extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe name="焼き肉のタレだけ！スキレットでビビンバ風" imageURL='https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993' ingredients={[ new Ingredient("ゴボウ", "４００g"), new Ingredient("ニンジン", "２５０g")]} />
          <Recipe name="焼き肉のタレだけ！スキレットでビビンバ風" imageURL='https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993' ingredients={[ new Ingredient("ゴボウ", "４００g"), new Ingredient("ニンジン", "２５０g")]} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe name="焼き肉のタレだけ！スキレットでビビンバ風" imageURL='https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993' ingredients={[ new Ingredient("ゴボウ", "４００g"), new Ingredient("ニンジン", "２５０g")]} />
          <Recipe name="焼き肉のタレだけ！スキレットでビビンバ風" imageURL='https://img.cpcdn.com/recipes/4428383/280/554b082e8f93fa33ca20308880599cf7.jpg?u=6509439&p=1490236543' ingredients={[ new Ingredient("ゴボウ", "４００g"), new Ingredient("ニンジン", "２５０g")]} />
        </View>

      </View>
    );
  }
}
