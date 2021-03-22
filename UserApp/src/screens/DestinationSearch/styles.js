import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        marginTop: 10
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
        borderRadius: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },
    separator: {
        backgroundColor: '#efefef',
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 110
    },
    autoCompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5
    },
    line: {
        width: 1,
        height: 45,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 32,
        left: 17,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15
    }
});

export default styles;