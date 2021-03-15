import React from 'react';
import { View, Text } from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import styles from './styles';
import HomeMap from '../../components/HomeMap';
import { useRoute } from '@react-navigation/native';

const SearchResults = () => {

    const route = useRoute();
    
    const { originPlace, destinationPlace } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            
            <View style={styles.types}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;