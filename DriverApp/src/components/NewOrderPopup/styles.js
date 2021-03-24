import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: "#00000099"
    },
    popupContainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 250,
    },
    uberType: {
        color: 'lightgrey',
        fontSize: 20,
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileIcon: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#008bff'
    },
    addInfoContainer: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
    },
    minutes: {
        color: 'white',
        fontSize: 26
        
    },
    distance: {
        color: 'lightgrey',
        fontSize: 20
    },
    declineButton: {
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    declineText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
        
    },
});

export default styles;