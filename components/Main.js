import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Todo from './Todo';

export default class Completed extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoArray: [],
            todoText: '',
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
                            color='black'
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
    addTodo(){
        if(this.state.todoText){
            var d = new Date();
            this.state.todoArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'todo': this.state.todoText
            });
            this.setState({ todoArray: this.state.todoArray });
            this.setState({todoText:''});
        }
    }
    deleteTodo(key){
        this.state.todoArray.splice(key, 1);
        this.setState({todoArray: this.state.todoArray});
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
        color: '#fff',
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
        fontSize: 24
    }
});
