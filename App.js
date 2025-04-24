import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '/.src/screens/HomeScreen';
import DetailsScreen from '/scr/screens/DetailsScreen';
import ProfileScren from './scr/screens/ProfileScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" componente={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Details" componente={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Profile" componente={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
