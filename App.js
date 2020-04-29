import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transactionscreen from './screens/Transactionpage';
import Searchscreen from './screens/Searchpage';

export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transactionscreen},
  Search:{screen:Searchscreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
