import React from 'react';
import { View }  from 'react-native';
import { Recipe } from './Recipe';
import RecipeStack from './RecipeStack';

import RECIPE_DATA from '../resources/recipes.json';
import MenuContainer from '../containers/MenuContainer';

export default class RecipeSelect extends React.Component<{}, {}> {
  render() {
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
        <MenuContainer />
      </View>
    );
  }
}