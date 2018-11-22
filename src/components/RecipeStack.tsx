import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { RECIPES_BY_ID } from '../resources';

interface RecipeStackProps {
	recipeIds: Array<number>
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
			<View style={{ height: 64, flex: 1 }}>
				<ScrollView style={{ flex: 1 }} horizontal={true}>
					{this.props.recipeIds.map((internalId, key) => {
						return (
							<Image style={styles.recipeImage} key={key} source={{ uri: RECIPES_BY_ID[internalId].imageUrlBySizeType.T280x210, width: 64, height: 64 }} />
						)
					})}
					<Image source={{ height: 64 }} />
				</ScrollView>
			</View>
		);
	}
}