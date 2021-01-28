import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const RouteMap = (props) => {

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.maps}
                initialRegion={{
                latitude: 28.450627, 
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>

                
            </MapView>
            
        </View>
    );
};

export default RouteMap;