import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../../graphql/queries';

const HomeMap = (props) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await API.graphql(
                    graphqlOperation(
                        listCars
                    )
                )

                setCars(response.data.listCars.items);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCars();

    }, [])

    const getImage = (type) => {
        if(type === 'UberX') {
            return require('../../assets/images/top-UberX.png');
        }
        if(type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png');
        }
        return require('../../assets/images/top-UberXL.png');
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={styles.maps}
                initialRegion={{
                latitude: 28.450627, 
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
                }}
            >

                {cars.map((car) => (
                    <Marker
                        key={cars.id} 
                        coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                    > 
                        <Image 
                            style={{ 
                                width: 60, 
                                height: 60, 
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: `${car.heading}deg`
                                }]    
                            }}
                            source={getImage(car.type)} 
                        />
                    </Marker>
                ))}
                
            </MapView>
            
        </View>
    );
};

export default HomeMap;