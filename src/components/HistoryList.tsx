import React from 'react';
import { View, ScrollView, Text} from 'react-native';
import RecipeHistoryModel from '../model/RecipeHistoryModel';
import RecipeStack from './RecipeStack';

interface HistoryListProps {
    recipeHistories: Array<RecipeHistoryModel>
}

export default class HistoryList extends React.Component<HistoryListProps, {}> {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'stretch' }}>
                <ScrollView style={{flex: 1}}>
                    {this.props.recipeHistories.map((prop, key) => {
                        return (
                            <View key={key}>
                                <RecipeStack  recipeIds={prop.recipeIds} />
                                <Text>{prop.createdAt.toLocaleString()}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}