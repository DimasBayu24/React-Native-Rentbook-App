import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainPage from '../Screens/MainPage';
import History from '../Screens/History';
const Tab = createMaterialBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
      }}>
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="History" component={History} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default BottomNavbar;
