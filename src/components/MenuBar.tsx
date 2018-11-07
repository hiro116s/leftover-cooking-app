import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { FOOD_IMAGE, FOOD_BLUE_IMAGE, REFRIGERATOR_IMAGE, REFRIGERATOR_BLUE_IMAGE, NOTE_IMAGE, NOTE_BLUE_IMAGE} from '../resources/img';
import { MenuType } from '../actions';

interface MenuBarProps {
  menuType: MenuType,
  toggleMenu: (this: MenuBarProps, menuType: MenuType) => any
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
        <TouchableHighlight style={{flex: 1}} onPress={() => this.props.toggleMenu(MenuType.MAIN)}>
          <Image style={styles.menuBarImage} source={ this.props.menuType === MenuType.MAIN ? FOOD_BLUE_IMAGE : FOOD_IMAGE } resizeMode="contain"/>
        </TouchableHighlight>
        <TouchableHighlight style={{flex: 1}} onPress={() => this.props.toggleMenu(MenuType.REFRIGERATOR)}>
          <Image style={styles.menuBarImage} source={ this.props.menuType === MenuType.REFRIGERATOR ? REFRIGERATOR_BLUE_IMAGE : REFRIGERATOR_IMAGE } resizeMode="contain"/>
        </TouchableHighlight>
        <TouchableHighlight style={{flex: 1}} onPress={() => this.props.toggleMenu(MenuType.HISTORY)}>
          <Image style={styles.menuBarImage} source={ this.props.menuType === MenuType.HISTORY ? NOTE_BLUE_IMAGE : NOTE_IMAGE } resizeMode="contain"/>
        </TouchableHighlight>
      </View>
    );
  }
}