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
    Modal,
    TouchableHighlight,
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Todo from './Todo';
import MapScreen from '../screens/MapScreen';


export default class MapModal extends Component {
    constructor(props){
      super(props);
      this.state = {
        modalVisible: false,
      };
    }

    render() {
      return (
        <View style={styles.todo}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
                  <Text>Hello World!</Text>

                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
        </View>
      );
    }

    componentDidMount() {
      this.props.onRef(this)
    }
    componentWillUnmount() {
      this.props.onRef(null)
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }


    method() {
      Alert.alert("WOHO")
    }

}
const styles = StyleSheet.create({
    
});
