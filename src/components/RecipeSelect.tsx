import React from 'react';
import { View } from 'react-native';
import { RecipeSelectAction } from '../actions/RecipeSelectAction';
import SelectedRecipesContainer from '../containers/SelectedRecipesContainer';
import { RECIPES_BY_ID } from '../resources';
import { Recipe } from './Recipe';

interface SelectRecipeProps {
    selectedRecipeIds: [number, number, number, number]
    selectRecipe: (recipeId: number) => RecipeSelectAction
}

export default class RecipeSelect extends React.Component<SelectRecipeProps, {}> {
  	render() {
    	return (
      		<View style={{flex: 1, alignItems: 'stretch'}}>
        		<View style={{flex: 5, flexDirection: 'row'}}>
          			<Recipe recipe={RECIPES_BY_ID[this.props.selectedRecipeIds[0]]} selectRecipe={this.props.selectRecipe} />
          			<Recipe recipe={RECIPES_BY_ID[this.props.selectedRecipeIds[1]]} selectRecipe={this.props.selectRecipe} />
        		</View>
        		<View style={{flex: 5, flexDirection: 'row'}}>
          			<Recipe recipe={RECIPES_BY_ID[this.props.selectedRecipeIds[2]]} selectRecipe={this.props.selectRecipe} />
          			<Recipe recipe={RECIPES_BY_ID[this.props.selectedRecipeIds[3]]} selectRecipe={this.props.selectRecipe} />
        		</View>
        		<View>
          			<SelectedRecipesContainer />
        		</View>
      		</View>
    	);
  	}
}