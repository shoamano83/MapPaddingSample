import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import MapView, {LatLng, Polygon} from 'react-native-maps';

const coordinates: LatLng[] = [
  {latitude: 47.624596, longitude: -122.355438},
  {latitude: 47.624596, longitude: -122.346595},
  {latitude: 47.618609, longitude: -122.346595},
  {latitude: 47.618609, longitude: -122.355438},
];

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  map: {
    height: 320,
    width: 320,
  },
});

function App(): React.JSX.Element {
  const mapRef = React.useRef<MapView>(null);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={'google'}
          style={styles.map}
          onMapReady={() =>
            mapRef.current?.fitToCoordinates(coordinates, {
              animated: false,
            })
          }>
          <Polygon coordinates={coordinates} fillColor={'rgba(255,0,0,0.7)'} />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

export default App;
