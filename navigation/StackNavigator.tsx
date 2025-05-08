import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import HolaMundoScreen from './HolaMundoScreen';

const Stack = createStackNavigator();

export default function StackNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HolaMundo" component={HolaMundoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}