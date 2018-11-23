import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements';

export default class EventList extends Component {
  render() {
    return (
      <View>
	<Text>Questa è la mia lista di EventList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
marginTop: 10,
//    alignItems: 'center',
//    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
