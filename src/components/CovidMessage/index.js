import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Some dummy covid message or something else.
            </Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    );
};

export default CovidMessage;