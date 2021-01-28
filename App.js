/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';

import Icon from 'react-native-vector-icons/AntDesign';
import HomeSearch from './src/components/HomeSearch';
import DestinationSearch from './src/screens/DestinationSearch';
import RouteMap from './src/components/RouteMap';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SearchResults />
    </>
  );
};

export default App;
