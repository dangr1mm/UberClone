import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import styles from './styles';
import HomeMap from '../../components/HomeMap';
import { NavigationContainer, useRoute, useNavigation } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createOrder } from '../../graphql/mutations';

const SearchResults = () => {

    const typeState = useState(null);

    const route = useRoute();
    const navigation = useNavigation();
    
    const { originPlace, destinationPlace } = route.params;

    const onSubmit = async () => {

        const [type] = typeState;
        
        if (!type) {
            return;
        }

        try {

            const userInfo = await Auth.currentAuthenticatedUser();
            
            console.log(userInfo);

            const date = new Date();

            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,

                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,

                userId: userInfo.attributes.sub,
                carId: "1",
            }

            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input: input
                    }
                )
            )

            Alert.alert(
                "Boa garoto",
                "Deu boa, pedido feito.",
                [{
                    text: "Go Home",
                    onPress: () => navigation.navigate("Home")
                }]
            )


        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            
            <View style={styles.types}>
                <UberTypes typeState={typeState} onSubmit={onSubmit} />
            </View>
        </View>
    );
};

export default SearchResults;