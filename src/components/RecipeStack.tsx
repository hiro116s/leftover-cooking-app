import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import RecipeModel from '../model/RecipeModel';

interface RecipeStackProps {
    recipes: Array<RecipeModel>;
}

const styles: any = StyleSheet.create({
  recipeImage: {
    margin: 1,
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: 'green'
  }
});

export default class RecipeStack extends React.Component<RecipeStackProps, {}> {
  render() {
    return (
        <ScrollView horizontal={true}>
            {this.props.recipes.map((prop, key) => {
                return (
                    <Image style={styles.recipeImage} key={key} source={{ uri: prop.$imageURL, width: 64, height: 64 }} />
                )
            })}
        </ScrollView>
    );
  }
}