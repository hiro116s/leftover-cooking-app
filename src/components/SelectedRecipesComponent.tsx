import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { RECIPES_BY_ID } from '../resources';
import { AddHistoryAction } from '../actions/AddHistoryAction';
import RecipeStack from './RecipeStack';

interface SelectedRecipesComponentProps {
    recipeIds: Array<number>
    addHistory: (recipeIds: Array<number>) => AddHistoryAction
}

const styles: any = StyleSheet.create({
    recipeImage: {
        margin: 1,
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: 'green'
    },
    registerButton: {
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        paddingTop: 22
    }
});

export default class SelectedRecipesComponent extends React.Component<SelectedRecipesComponentProps, {}> {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <RecipeStack recipeIds={this.props.recipeIds} />
                <TouchableOpacity style={styles.registerButton} onPress={() => this.props.addHistory(this.props.recipeIds)}>
                    <Text style={{fontSize:20}}>登録</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
