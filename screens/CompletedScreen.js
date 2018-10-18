import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class CompletedScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed',
  };

  render() {
    return (
      <View>
        <Text>
          Completed Stuff is here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
