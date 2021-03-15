import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import UberTypeRow from '../../components/UberTypeRow';
import typesData from '../../assets/data/types';
import types from '../../assets/data/types';

const UberTypes = (props) => {

    const confirm = () => {
        console.warn('confirm');
    }

    return (
        <View>
            {types.map(type => (
                <UberTypeRow type={type} key={type.id} />
            ))}

            <Pressable onPress={confirm} style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirm Uber</Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;