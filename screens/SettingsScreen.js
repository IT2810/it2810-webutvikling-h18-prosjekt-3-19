import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";

export default class SettingsScreen extends React.Component {
  state = {
    userLocation: null,
    usersPlaces: []
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: 63.416,
            longitude: 10.405,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        });
        fetch("me", {
          method: "POST",
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      },
      err => console.log(err)
    );
  };

  

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
          userLocation={this.state.userLocation}
          usersPlaces={this.state.usersPlaces}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});