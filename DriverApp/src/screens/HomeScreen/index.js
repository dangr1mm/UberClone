import React, { useState } from 'react';
import { Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import MapViewDirections from 'react-native-maps-directions';
import apiKey from '../../../keys';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewOrderPopup from '../../components/NewOrderPopup';


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const HomeScreen = (props) => {

    const [isOnline, setIsOnline] = useState(false);

    const onGoPress = () => {
        setIsOnline(!isOnline);
    }

    return (
        <View>
            <MapView
                showsUserLocation={true}
                showsMyLocationButton={false}
                style={styles.mapView}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={apiKey.directions}
                />
            </MapView>


            {/* OVER MAP BUTTONS */}


            <Pressable
                onPress={() => console.warn('hey')}
                style={[styles.roundButton, {top: 10, left: 10}]}>
                <Entypo name={"menu"} size={24} color="#4a4a4a" />
            </Pressable>

            <Pressable
                onPress={() => console.warn('hey')}
                style={[styles.roundButton, {top: 10, right: 10}]}>
                <Ionicons name={"search-sharp"} size={24} color="#4a4a4a" />
            </Pressable>

            <Pressable
                onPress={() => console.warn('hey')}
                style={[styles.roundButton, {bottom: 100, right: 10}]}>
                <MaterialIcons name={"chat"} size={24} color="#4a4a4a" />
            </Pressable>

            <Pressable
                onPress={() => console.warn('hey')}
                style={[styles.roundButton, {bottom: 100, left: 10}]}>
                <Fontisto name={"shield"} size={24} color="#4a4a4a" />
            </Pressable>


            {/* GO BUTTON */}


            <TouchableOpacity
                onPress={onGoPress}
                style={styles.goButton}>
                <Text style={styles.goText}>
                    {
                        isOnline ? "END" : "GO"
                    }
                </Text>
            </TouchableOpacity>


            {/* BALANCE BUTTON */}


            <Pressable
                onPress={() => console.warn('hey')}
                style={styles.balanceButton}>
                <Text style={styles.balanceText}>
                    <Text style={{color: 'green'}}>$</Text>
                    0.00
                </Text>
            </Pressable>


            {/* YOU'RE OFFLINE CONTAINER */}


            <View style={styles.bottomContainer}>
                <Octicons name={"settings"} size={28} color="#4a4a4a" />
                <Text style={styles.bottomText}>
                    {
                        isOnline ? "You're online" : "You're offline"
                    }
                </Text>
                <Entypo name={"menu"} size={28} color="#4a4a4a" />
            </View>

            <NewOrderPopup />

        </View>
    );
};

export default HomeScreen;