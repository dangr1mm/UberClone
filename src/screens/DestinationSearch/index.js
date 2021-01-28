import React, {useEffect, useState} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        console.warn('useffect is called');
        if(originPlace && destinationPlace) {
            console.warn('Redirect results');
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
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBFZrCVzZ80PdHZ4UQhRCbYsinHD_lu2nw',
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBFZrCVzZ80PdHZ4UQhRCbYsinHD_lu2nw',
                        language: 'en',
                    }}
                />

            </View>

        </SafeAreaView>
    )
}

export default DestinationSearch;