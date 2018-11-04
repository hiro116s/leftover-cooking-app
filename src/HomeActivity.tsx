import React from 'react';
import { View }  from 'react-native';
import { Recipe } from './components/Recipe';
import RecipeStack from './components/RecipeStack';
import MenuBar from './components/MenuBar';

import { RecipeSource } from './model/RecipeSource';
import OwnerModel from './model/OwnerModel';

import RECIPE_DATA from './resources/recipes.json';
import RecipeModel from './model/RecipeModel';

export default class HomeActivity extends React.Component<{}, {}> {
  render() {
    console.log(RECIPE_DATA[0].externalId, RECIPE_DATA[0].imageUrlBySizeType, RECIPE_DATA[0].ingredients, RECIPE_DATA[0].internalId, RECIPE_DATA[0].owner, RECIPE_DATA[0].recipeSource, RECIPE_DATA[0].title, RECIPE_DATA[0].url);
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <Recipe recipe={RECIPE_DATA[0]} />
          <Recipe recipe={RECIPE_DATA[1]} />
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <Recipe recipe={RECIPE_DATA[2]} />
          <Recipe recipe={RECIPE_DATA[3]} />
        </View>
        <View>
          <RecipeStack recipes={[RECIPE_DATA[5], RECIPE_DATA[4], RECIPE_DATA[6]]} />
        </View>
        <MenuBar />
      </View>
    );
  }
}
