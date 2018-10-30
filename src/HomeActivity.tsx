import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeActivity extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start work ing on your app!</Text>
      </View>
    );
  }
}
