import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import MapView, {EdgePadding, LatLng, Marker} from 'react-native-maps';

// Space Needle
const defaultPosition: LatLng = {
  latitude: 47.62055,
  longitude: -122.3493,
};
const defaultZoomLevel = 13;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  map: {
    height: 360,
    width: 240,
  },
});

function App(): React.JSX.Element {
  const mapPadding: EdgePadding = {
    top: 0,
    right: 0,
    bottom: 180,
    left: 0,
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <MapView
            provider={'google'}
            style={styles.map}
            initialCamera={{
              center: defaultPosition,
              heading: 0,
              pitch: 0,
              zoom: defaultZoomLevel,
            }}
            mapPadding={mapPadding}>
            <Marker coordinate={defaultPosition} />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
