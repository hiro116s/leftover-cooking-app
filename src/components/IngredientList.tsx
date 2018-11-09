import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MenuContainer from '../containers/MenuContainer';
import IngredientModel from '../model/IngredientModel';
import IngredientElement from './IngredientElement';

interface IngredientListProps {
    ingredients: Array<IngredientModel>;
}

export default class IngredientList extends React.Component<IngredientListProps, {}> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <ScrollView style={{flex: 1}}>
          {this.props.ingredients.map((prop, key) => {
            return (
              <IngredientElement key={key} title={prop.title} amount={prop.amount}/>
            )
          })}
        </ScrollView>
        <MenuContainer />
      </View>
    );
  }
}