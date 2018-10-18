import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { CheckBox, ListItem, Body } from 'native-base';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text,
          checked: false,
          dialogVisible: false
        }
      }
    
      checkBoxChecked = () => {
        this.props.removeTodoElement(this.props.text);
        this.setState({ dialogVisible: false });
      }
    
      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleCancel = () => {
        this.setState({ dialogVisible: false });
      };

    
    render() {
        return (
            <View key={this.props.keyval} style={styles.todo}>
            <ListItem>
                  <CheckBox style={styles.checkBox}
                    center
                    checked={this.state.checked}
                  />
              <Body>
                <Text style={styles.todoText}>{this.props.val.date}</Text>
                <Text style={styles.todoText}>{this.props.val.todo}</Text>
                </Body>
              </ListItem>
              <TouchableOpacity onPress={this.props.deleteMethod} style={styles.todoDelete}>
                    <Text style={styles.todoDeleteText}>X</Text>
                </TouchableOpacity>
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
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    todoDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        top: 10,
        bottom: 10,
        right: 10,
        zIndex: 11,
        borderRadius: 5,
        width: 40
    },
    todoDeleteText: {
        color: 'white'
    }
});