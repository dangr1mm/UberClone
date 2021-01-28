import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import apiKey from '../../../keys';

const RouteMap = (props) => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045
    }

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045
    }

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
                
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={apiKey.directions}
                    strokeWidth={5}
                    strokeColor="black"
                />

                <Marker 
                    coordinate={origin}
                    title={'Origin'}
                />
                <Marker
                    coordinate={destination}
                    title={'Destination'}
                />
                
            </MapView>
            
        </View>
    );
};

export default RouteMap;