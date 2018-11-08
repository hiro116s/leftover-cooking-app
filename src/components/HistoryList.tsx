import React from 'react';
import { View }  from 'react-native';

import MenuContainer from '../containers/MenuContainer';

export default class HistoryList extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style = {{flex: 1}}></View>
        <MenuContainer />
      </View>
    );
  }
}