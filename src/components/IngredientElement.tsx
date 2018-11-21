import React from 'react';
import { Text, View } from 'react-native';

interface IngredientElementProps {
    title: string;
    amount: string;
}

export default class IngredientElement extends React.Component<IngredientElementProps, {}> {
    render() {
        return (
            <View style={{flexDirection: 'row', height: 50, borderBottomWidth:1, borderBottomColor: 'lightgray', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 30}}>{this.props.title}</Text>
                <Text style={{fontSize: 30}}>{this.props.amount}</Text>
            </View>
        );
    }
}