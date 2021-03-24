import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mapView: {
        width: '100%',
        height: Dimensions.get('window').height - 110
    },
    bottomContainer: {
        height: 86,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        //backgroundColor: 'red'
    },
    bottomText: {
        fontSize: 22,
        color: '#4a4a4a'
    },
    roundButton: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25
    },
    goButton: {
        position: 'absolute',
        backgroundColor: '#1495ff',
        padding: 10,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        bottom: 100,
        left: Dimensions.get('window').width / 2 -45       
    },
    balanceButton: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        top: 10,
        left: Dimensions.get('window').width / 2 - 50       
    },
    goText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    balanceText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default styles;