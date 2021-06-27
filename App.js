import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signup from './pages/Signup';


const App = () => {
  return (
    <Signup />
  );
};

const AppNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    }),
  }
})

export default createAppContainer(AppNavigator);