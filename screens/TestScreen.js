import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputField}
              placeholder="Add entry here! woo."
              onChangeText={(text) => this.setState({text})}
            />
            <Text onPress={() => {
                let infld = this.state.text
                Alert.alert('You tapped the button!' + infld);

                this._storeEntry(infld);

              }} style={styles.helpLinkText}>
              Save
            </Text>

            <Text onPress={() => {
                this._retrieveEntry();
              }} style={styles.helpLinkText}>
              Get
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  _storeEntry = async (text) => {
    try {
      await AsyncStorage.setItem('@ToDoStore:abc123', text);
    } catch (error) {
      Alert.alert('Error saving data');
    }
  }

  /*

  Todos: Text, dato, lokasjon
  TotalCount: int
  DailyCount: int, dato
  Completed: Text, dato, lokasjon

  */

  _retrieveEntry = async () => {
    console.log('¯\\_(ツ)_/¯ ');
    try {
      const value = await AsyncStorage.getItem('@ToDoStore:abc123');
      if (value !== null) {
        // We have data!!
        console.log(value);
        Alert.alert('Value: ' + value);
      }
    } catch (error) {
      // Error retrieving data
      Alert.alert('¯\\_(ツ)_/¯ ');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    flexGrow: 1,
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
    marginHorizontal: 20,
    width: 300,
  },
  textInputButton: {
    marginTop: 1000,
    maxWidth: 300,
  },
  textInputField: {
    flexGrow: 20,
  },

});
