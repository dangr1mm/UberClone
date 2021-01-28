import React from 'react';
import { View, Text } from 'react-native';
import RouteMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';
import styles from './styles';

const SearchResults = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <RouteMap />
            </View>
            
            <View style={styles.types}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;