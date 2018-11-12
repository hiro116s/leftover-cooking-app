import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import { RECIPES_BY_ID } from '../resources';

interface RecipeStackProps {
    recipes: Array<number>;
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
            {this.props.recipes.map((internalId, key) => {
                return (
                    <Image style={styles.recipeImage} key={key} source={{ uri: RECIPES_BY_ID[internalId].imageUrlBySizeType.T280x210, width: 64, height: 64 }} />
                )
            })}
            <Image source={{height: 64}}/>
        </ScrollView>
    );
  }
}