import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import RecipeModel from '../model/RecipeModel';
import { RecipeSelectAction } from '../actions/RecipeSelectAction';

export interface RecipeProps {
  recipe: RecipeModel;
  selectRecipe: (recipeId: number) => RecipeSelectAction
}

const styles: any = StyleSheet.create({
  recipeImage: {
    flex: 1,
    margin: 3,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: undefined,
    width: undefined
  },
});

export class Recipe extends React.Component<RecipeProps, {}> {
  render() {
    return (
      <View style={styles.recipeImage}>
        <TouchableHighlight style={{flex: 4}} onPress={() => this.props.selectRecipe(this.props.recipe.internalId)}>
          <Image style={styles.recipeImage} source={{uri: this.props.recipe.imageUrlBySizeType.T280x210}} />
        </TouchableHighlight>
        <Text style={{flex: 1}}>{this.props.recipe.title}</Text>
        <FlatList style={{flex: 1}} data={this.props.recipe.ingredients} keyExtractor={(item, index) => index.toString()} renderItem={(ingredient) => 
          <Text>{ingredient.item.title}:{ingredient.item.amount}</Text>}
        />
      </View>
    );
  }
}