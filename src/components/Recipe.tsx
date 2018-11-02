import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import RecipeModel from '../model/RecipeModel';

export interface RecipeProps {
  recipe: RecipeModel;
}

const styles: any = StyleSheet.create({
  recipeImage: {
    flex: 1,
    margin: 3,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
});

export class Recipe extends React.Component<RecipeProps, {}> {
  render() {
    return (
      <View style={styles.recipeImage}>
        <Image style={{flex: 4}} source={{uri: this.props.recipe.$imageURL}} />
        <Text style={{flex: 1}}>{this.props.recipe.$name}</Text>
        <FlatList style={{flex: 1}} data={this.props.recipe.$ingredients} keyExtractor={(item, index) => index.toString()} renderItem={(ingredient) => 
          <Text>{ingredient.item.$title}:{ingredient.item.$amount}</Text>} 
        />
      </View>
    );
  }
}