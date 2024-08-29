import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import MapView, {LatLng} from 'react-native-maps';

// New York
const initialPosition: LatLng = {
  latitude: 40.781326,
  longitude: -73.966539,
};
// Seattle
const updatedPosition: LatLng = {
  latitude: 47.62055,
  longitude: -122.3493,
};

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
  const mapRef = React.useRef<MapView>(null);

  React.useEffect(() => {
    mapRef.current?.setCamera({
      center: updatedPosition,
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={'google'}
          style={styles.map}
          initialCamera={{
            center: initialPosition,
            heading: 0,
            pitch: 0,
            zoom: 10,
            //altitude: 5000, // when testing with MapKit
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
