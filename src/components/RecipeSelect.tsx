import React from 'react';
import { View } from 'react-native';
import { RECIPES_BY_ID } from '../resources';
import { Recipe } from './Recipe';
import RecipeStack from './RecipeStack';


export default class RecipeSelect extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <Recipe recipe={RECIPES_BY_ID[91]} />
          <Recipe recipe={RECIPES_BY_ID[43]} />
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <Recipe recipe={RECIPES_BY_ID[45]} />
          <Recipe recipe={RECIPES_BY_ID[21]} />
        </View>
        <View>
          <RecipeStack recipes={[RECIPES_BY_ID[5], RECIPES_BY_ID[4], RECIPES_BY_ID[6]]} />
        </View>
      </View>
    );
  }
}