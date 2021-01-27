import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Buzz App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 0,
    padding: 30
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
