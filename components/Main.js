import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Modal,
    TouchableHighlight,
} from 'react-native';
import Todo from './Todo';
import MapModal from './MapModal';

export default class Completed extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoArray: [],
      todoText: '',
      modalVisible: true,

      coord_y: 0,
      coord_x: 0,

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
      return <Todo 
        key={key} 
        keyval={key} 
        val={val}
        deleteMethod={()=>this.deleteTodo(key)}
        completeMethod={()=>this.completeTodo(key)}
        inspectMethod={()=>this.inspectTodo(key)}
      />
    });
    return (
      <View style={styles.todo}>
        <View>

          <MapModal 
            x={this.state.coord_x} 
            y={this.state.coord_y} 
            onRef={ref => (this.mapmod = ref)}
          />
          
          <TextInput 
            style={styles.textInput}
            placeholder='Write Todo Here!'
            onChangeText={(todoText)=> this.setState({todoText})}
            value={this.state.todoText}
            placeholderTextColor='black'
            underlineColorAndroid='transparent'>
          </TextInput>

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
        })
        this.parseDB(JSON.parse(value));
      }
    } catch (error) {
      Alert.alert('Error retrieving data');
    }
  }

  // Display JsonDB in UI list
  parseDB(data) {
    let todos = data.todos

    for (let i = 0; i < todos.length; i++) { 

      let date_ = todos[i]['date'];
      let todo_ = todos[i]['text'];

      this.state.todoArray.push({
        'date': date_,
        'todo': todo_,
      });

      this.setState({ todoArray: this.state.todoArray });

    }
  }

  // When a new todo is added
  addTodo(){
    if(this.state.todoText){
      var d = new Date();

      let date_ = d.getFullYear() + "/" + (d.getMonth()+1) + "/"+ d.getDate();
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

  // Save a new todo in JsonDB
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


  // When a todo is completed
  completeTodo(key) {
    
    // Update UI
    this.state.todoArray.splice(key, 1);
    this.setState({todoArray: this.state.todoArray});
    
    let JSONdata = this.state.JsonDB;

    // Update JSON
    JSONdata.todos.splice(key, 1);
    JSONdata.totalcount += 1;

    var d = new Date();
    let date_ = d.getFullYear() + "/" + (d.getMonth()+1) + "/"+ d.getDate();
    
    // TODO: Add on load
    if (JSONdata.today === date_) {
      JSONdata.todaycount += 1;
    } else {
      JSONdata.todaycount = 1;
      JSONdata.today = date_;  
    }

    this.setState({
      JsonDB: JSONdata,
    });

    // Update AsyncStorage
    this._storeEntry('@ToDoStore:JSON', JSONdata);
  }

  // When a todo is deleted
  deleteTodo(key){
    
    // Update UI
    this.state.todoArray.splice(key, 1);
    this.setState({todoArray: this.state.todoArray});
    
    let JSONdata = this.state.JsonDB;

    // Update JSON
    JSONdata.todos.splice(key, 1);

    this.setState({
      JsonDB: JSONdata,
    });

    // Update AsyncStorage
    this._storeEntry('@ToDoStore:JSON', JSONdata);
  }

  _storeEntry = async (key, data) => {
    try {
      await AsyncStorage.setItem('@ToDoStore:JSON', JSON.stringify(data));
    } catch (error) {
      Alert.alert('Error saving data');
    }
  }

  inspectTodo(key) {
    this.mapmod.setModalVisible(true);
    this.setState({
      coord_x: 63.416,
      coord_y: 10.405,
    })
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
