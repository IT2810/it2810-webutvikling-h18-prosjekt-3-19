import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';
import Todo from './Todo';

export default class Completed extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoArray: [],
            todoText: '',

            JsonDB: {
              'todos':[],
              'totalcount': 0,
              'todaycount': 0,
              'today': '2000/01/01',
            },
        };
    }

    render() {
        let todos = this.state.todoArray.map((val, key)=>{
            return <Todo key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteTodo(key)}/>
        });
        return (
            <View style={styles.todo}>
                <View>

                        <TextInput 
                            style={styles.textInput}
                            placeholder='Write Todo Here!'
                            onChangeText={(todoText)=> this.setState({todoText})}
                            value={this.state.todoText}
                            placeholderTextColor='black'
                            underlineColorAndroid='transparent'>
                        </TextInput>

                        {/* DEBUG */}
                        <Text>{ this.state.debug }</Text>

                        <TouchableOpacity onPress={ this.addTodo.bind(this) } style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                </View>
                <ScrollView style={styles.todoContainer}>
                    {todos}
                </ScrollView>
            </View>
        );
    }

    // When app starts get JSON from storage
    componentDidMount() {
      this.getJSON();
    }

    getJSON = async () => {
      try {
        const value = await AsyncStorage.getItem('@ToDoStore:JSON');
        if (value !== null) {
          // We have data!!
          this.setState({
            JsonDB: JSON.parse(value),
            debug: value,
          })
          this.parseDB(JSON.parse(value));
        }
      } catch (error) {
        Alert.alert('Error retrieving data');
      }
    }

    parseDB(data) {
      let todos = data.todos

       this.setState({
          debug: JSON.stringify(todos[1]),
        })

      // for (let i = 0; i < todos.length; i++) { 
      //   this.state.todoArray.push({
      //     'date': date_,
      //     'todo': todo_,
      //   });
      // }
    }

    // When a new todo is added
    addTodo(){
        if(this.state.todoText){
            var d = new Date();

            let date_ = d.getFullYear() + "/"+(d.getMonth()+1) + "/"+ d.getDate();
            let todo_ = this.state.todoText;

            this.state.todoArray.push({
                'date': date_,
                'todo': todo_,
            });

            this.setState({ todoArray: this.state.todoArray });
            this.setState({ todoText:'' });
            
            this.saveTodo(todo_, date_);
        }
    }

    saveTodo(content, today) {

      let newTodo = {
        'text': content,
        'date': today,
      }

      let JSONdata = this.state.JsonDB;

      JSONdata.todos.push(newTodo);

      this.setState({
        JsonDB: JSONdata,
      });

      this._storeEntry('@ToDoStore:JSON', JSONdata);

    }

    deleteTodo(key){
        this.state.todoArray.splice(key, 1);
        this.setState({todoArray: this.state.todoArray});
    }

    _storeEntry = async (key, data) => {
      try {
        await AsyncStorage.setItem('@ToDoStore:JSON', JSON.stringify(data));
      } catch (error) {
        Alert.alert('Error saving data');
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
    textInput: {
        alignSelf: 'stretch',
        color: '#000',
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth:2,
        borderTopColor: '#ededed'     
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 10,
        top: 10,
        backgroundColor: '#E91E63',
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }
});
