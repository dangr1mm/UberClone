import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    map: {
        height: Dimensions.get('window').height - 400
    },
    types: {
        height: 200
    }
});

export default styles;