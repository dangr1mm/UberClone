import React, {useEffect, useState} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import apiKey from '../../../keys';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';



const DestinationSearch = (props) => {

    const navigation = useNavigation();

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        
        if(originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace
            });
        }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>

            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                        console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: apiKey.places,
                        language: 'en',
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autoCompleteContainer,
                            top: 55,
                        },
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: apiKey.places,
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />

                <View style={styles.circle}/>
                <View style={styles.line}/>
                <View style={styles.square}/>

            </View>

        </SafeAreaView>
    )
}

export default DestinationSearch;