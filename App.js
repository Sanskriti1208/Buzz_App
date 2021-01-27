import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FacebookScreen from './screens/fb';
import InstaScreen from './screens/insta';
import AppHeader from './appHeader';

export default function App() {
  return (
    <View>
      <AppHeader />
      <AppContainer />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  FacebookScreen: {screen: FacebookScreen},
  InstaScreen: {screen: InstaScreen},
});

const AppContainer = createAppContainer(TabNavigator);


