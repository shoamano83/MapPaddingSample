import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import MapView, {EdgePadding, LatLng, Polygon} from 'react-native-maps';

const coordinates: LatLng[] = [
  {latitude: 47.624596, longitude: -122.355438},
  {latitude: 47.624596, longitude: -122.347595},
  {latitude: 47.618609, longitude: -122.347595},
  {latitude: 47.618609, longitude: -122.355438},
];

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  map: {
    height: 240,
    width: 360,
  },
});

function App(): React.JSX.Element {
  const mapPadding: EdgePadding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 180,
  };
  const edgePadding: EdgePadding = {
    top: 0,
    right: 0,
    bottom: 120,
    left: 0,
  };

  const mapRef = React.useRef<MapView>(null);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            provider={'google'}
            style={styles.map}
            onMapReady={() => {
              mapRef.current?.fitToCoordinates(coordinates, {
                animated: false,
                edgePadding: edgePadding,
              });

              /*
              // if I change code to this, the issue doesn't occur
              setTimeout(
                () =>
                  mapRef.current?.fitToCoordinates(coordinates, {
                    animated: false,
                    edgePadding: edgePadding,
                  }),
                1000,
              );*/
            }}
            mapPadding={mapPadding}>
            <Polygon
              coordinates={coordinates}
              fillColor={'rgba(255,0,0,0.7)'}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
