import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  
  state = {
    loc: { latitude: 63.416,
      longitude: 10.405,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0421 },
      locationResult: null,
      location: {coords: { latitude: 63.416,
      longitude: 10.405}},
  };

  componentDidMount() {
    this._getLocationAsync();
  }
  _handlelocChange = loc => {
    this.setState({ loc });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };

  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{ 
            latitude: this.state.location.coords.latitude, 
            longitude: this.state.location.coords.longitude, 
            latitudeDelta: 0.01, 
            longitudeDelta: 0.01 }}
          onRegionChange={this._handlelocChange}
        >
    <MapView.Marker
      coordinate={this.state.location.coords}
      title="My Location"
    />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  map: {
    width: "100%",
    height: "100%"
  }
  
});
