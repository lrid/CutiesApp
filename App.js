import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/homeScreen';
import Kittens from './src/screens/kittens';
import Cows from './src/screens/cows';
import Deer from './src/screens/deer';
import LogIn from './src/screens/login';
import Dashboard from './src/screens/dashboard';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kittens" component={Kittens} />
        <Stack.Screen name="Cows" component={Cows} />
        <Stack.Screen name="Deer" component={Deer} />
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

