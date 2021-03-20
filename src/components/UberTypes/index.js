import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import UberTypeRow from '../../components/UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes = ({ typeState, onSubmit }) => {

    const [selectedType, setSelectedType] = typeState;

    return (
        <View>
            {typesData.map(type => (
                <UberTypeRow 
                    type={type} 
                    key={type.id} 
                    isSelected={type.type === selectedType}
                    onPress={() => setSelectedType(type.type)}
                />
            ))}

            <Pressable onPress={onSubmit} style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirm Uber</Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;