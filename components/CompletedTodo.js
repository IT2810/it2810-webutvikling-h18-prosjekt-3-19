import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { CheckBox, ListItem, Body } from 'native-base';

export default class CompletedTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    }
  }

  render() {
      return (
        <View key={this.props.keyval} style={styles.todo}>
          <ListItem>
            <Body>
              <Text style={styles.todoText} onPress={this.inspect}>{this.props.val.date}</Text>
              <Text style={styles.todoText} onPress={this.inspect}>{this.props.val.todo}</Text>
            </Body>
            </ListItem>
       </View>
      );
  }
}
const styles = StyleSheet.create({
    todo: {
        position: 'relative',
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: 'white'
    },
    todoText: {
        paddingLeft: 20,
    },
});
