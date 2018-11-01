import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Ingredient from '../model/Ingredient';

export interface RecipeProps {
    imageURL: string;
    name: string;
    ingredients: Array<Ingredient>;
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
        <Image style={{flex: 4}} source={{uri: this.props.imageURL}} />
        <Text style={{flex: 1}}>{this.props.name}</Text>
        <FlatList style={{flex: 1}} data={this.props.ingredients} keyExtractor={(item, index) => index.toString()} renderItem={(ingredient) => 
          <Text>{ingredient.item.$title}:{ingredient.item.$amount}</Text>} 
        />
      </View>
    );
  }
}