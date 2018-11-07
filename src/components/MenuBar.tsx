import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FOOD_IMAGE, FOOD_BLUE_IMAGE, REFRIGERATOR_IMAGE, REFRIGERATOR_BLUE_IMAGE, NOTE_IMAGE, NOTE_BLUE_IMAGE} from '../resources/img';

interface MenuBarProps {

}

const styles: any = StyleSheet.create({
  menuBarImage: {
    flex: 1, 
    height: undefined, 
    width: undefined
  },
  menuBarWhole: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'darkgrey'
  }
});

export default class MenuBar extends React.Component<MenuBarProps, {}> {
  render() {
    return (
      <View style={styles.menuBarWhole}>
        <Image style={styles.menuBarImage} source={FOOD_BLUE_IMAGE} resizeMode="contain"/>
        <Image style={styles.menuBarImage} source={REFRIGERATOR_IMAGE} resizeMode="contain"/>
        <Image style={styles.menuBarImage} source={NOTE_IMAGE} resizeMode="contain"/>
      </View>
    );
  }
}