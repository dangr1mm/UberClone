import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const NewOrderPopup = (props) => {
    return (
        <View style={styles.root}>

            <Pressable style={styles.declineButton}>
                <Feather name={"x"} size={20} color={"white"} />
                <Text style={styles.declineText}>Decline</Text>
            </Pressable>

            <View style={styles.popupContainer}>

                <View style={styles.row}>
                    <Text style={styles.uberType}>UberX</Text>
                    
                    <View style={styles.profileIcon}>
                        <FontAwesome name={"user"} size={35} color={"white"} />
                    </View>
                    
                    <Text style={styles.uberType}>
                        <AntDesign name={"star"} size={18} />
                        5
                    </Text>
                </View>
                
                <View style={styles.addInfoContainer}>
                    <Text style={styles.minutes}>2 min</Text>
                    <Text style={styles.distance}>0.2 mi</Text>
                </View>

            </View>
        </View>
    );
};

export default NewOrderPopup;