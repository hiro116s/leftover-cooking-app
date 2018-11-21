import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { RECIPES_BY_ID } from '../resources';
import { AddHistoryAction } from '../actions/AddHistoryAction';

interface RecipeStackProps {
    recipeIds: Array<number>,
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

export default class RecipeStack extends React.Component<RecipeStackProps, {}> {
    render() {
        return (
            <View style={{height: 64, flexDirection: 'row'}}>
                <ScrollView style={{flex:1}} horizontal={true}>
                    {this.props.recipeIds.map((internalId, key) => {
                        return (
                            <Image style={styles.recipeImage} key={key} source={{ uri: RECIPES_BY_ID[internalId].imageUrlBySizeType.T280x210, width: 64, height: 64 }} />
                        )
                    })}
                    <Image source={{height: 64}}/>
                </ScrollView>
                <TouchableOpacity style={styles.registerButton} onPress={() => this.props.addHistory(this.props.recipeIds)}>
                    <Text style={{fontSize:20}}>登録</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
