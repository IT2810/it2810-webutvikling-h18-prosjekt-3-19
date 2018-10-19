import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Location, Permissions } from 'expo';
import {
  createStackNavigator,
} from 'react-navigation';
import CompletedTodo from './CompletedTodo';
import MapScreen from '../screens/MapScreen';
import MapModal from './MapModal';

export default class Completed extends Component {
    constructor(props){
      super(props);
      this.state = {
        todoArray: [],
        todoText: '',
        debug: '',
        
        CompletedDB: {
          'todos': []
        },
      };
    }

    render() {
      let todos = this.state.todoArray.map((val, key)=>{
        return <CompletedTodo
          key={key} 
          keyval={key} 
          val={val}
        />
      });
      return (
        <View style={styles.todo}>
          <View>

            {/* DEBUG */}
            <Text>{ this.state.debug }</Text>

          </View>

        </View>
      );
    }

    // When app starts get JSON from storage
    componentDidMount() {
      this.getJSON();
    }

    getJSON = async () => {
      try {
        const value = await AsyncStorage.getItem('@ToDoStore:Completed');
        if (value !== null) {
          // We have data!!
          this.setState({
            CompletedDB: JSON.parse(value),
            // debug: JSON.stringify(JSON.parse(value).todos[0]),
          })
          this.parseDB(JSON.parse(value));
        }
      } catch (error) {
        Alert.alert('Error retrieving data');
      }
    }

    // Display JsonDB in UI list
    parseDB(data) {
      let todos = data;

      this.setState({ 
        todoArray: [{'date': "tdarray", 'todo': "test"}],
        debug: "todo_",
      });

      this.setState({ 
        debug: this.state.todoArray[0],
      })

      for (let i = 0; i < todos.length; i++) { 

        let date_ = todos[i]['date'];
        let todo_ = todos[i]['todo'];

        let tdarray = this.state.todoArray;
        tdarray.push({
          'date': "10/10/2010",
          'todo': "test",
        });

        this.setState({ 
          todoArray: tdarray,
          debug: todo_,
        });

      }
    }

}
const styles = StyleSheet.create({
    todo: {
        flex: 1,
    },
    todoContainer: {
        position: 'relative',
        flex: 2,
    },
});
