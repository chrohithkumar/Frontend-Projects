import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import screens
import HomeScreen from '../pages/HomeScreen';
import InputText from '../pages/InputText';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Forms" component={InputText} />
    </Drawer.Navigator>
  );
}
