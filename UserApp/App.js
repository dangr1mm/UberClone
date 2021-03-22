/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root';
import DestinationSearch from './src/screens/DestinationSearch';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(config)


navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber Clone App Location Permission",
          message:
            "Cool Photo App needs access to your location " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Router />
    </>
  );
};

export default withAuthenticator(App);
