import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavbar from './src/Components/BottomNavbar';
import History from './src/Screens/History';
import DetailScreen from './src/Screens/DetailScreen';
import Login from './src/Screens/Login';
const Stack = createStackNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login / Register"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainPage"
            component={BottomNavbar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
