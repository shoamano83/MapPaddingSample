import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import MapView, {EdgePadding, LatLng, Polygon} from 'react-native-maps';

const coordinates: LatLng[] = [
  {latitude: 47.624596, longitude: -122.355438},
  {latitude: 47.624596, longitude: -122.347595},
  {latitude: 47.618609, longitude: -122.347595},
  {latitude: 47.618609, longitude: -122.355438},
];

const delayMsec = 5000;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  map: {
    height: 240,
    width: 320,
  },
});

function App(): React.JSX.Element {
  const mapPadding: EdgePadding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 160,
  };
  const edgePadding: EdgePadding = {
    top: 0,
    right: 0,
    bottom: 120,
    left: 0,
  };

  const mapRef = React.useRef<MapView>(null);
  const [mapUpdated, setMapUpdated] = React.useState(false);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={'google'}
          style={styles.map}
          onMapReady={() => {
            mapRef.current?.fitToCoordinates(coordinates, {
              edgePadding: edgePadding,
              animated: false,
            });

            // update `mapPadding` 5 secs later
            setTimeout(() => setMapUpdated(true), delayMsec);
          }}
          mapPadding={mapUpdated ? mapPadding : undefined}>
          <Polygon coordinates={coordinates} fillColor={'rgba(255,0,0,0.7)'} />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

export default App;
