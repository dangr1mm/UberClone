import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import apiKey from '../../../keys';

const RouteMap = ({origin, destination}) => {

    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }

    const destinationLocation = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={styles.maps}
                initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>
                
                <MapViewDirections
                    origin={originLocation}
                    destination={destinationLocation}
                    apikey={apiKey.directions}
                    strokeWidth={5}
                    strokeColor="black"
                />

                <Marker 
                    coordinate={originLocation}
                    title={'Origin'}
                />
                <Marker
                    coordinate={destinationLocation}
                    title={'Destination'}
                />
                
            </MapView>
            
        </View>
    );
};

export default RouteMap;