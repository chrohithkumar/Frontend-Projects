import Home from '../pages/HomeScreen';
import InputText from '../pages/InputText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="InputText"
       component={InputText}
        options={{
          tabBarLabel: 'InputForm',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size}></MaterialCommunityIcons>
          ),
        }}

       ></Tab.Screen>
    </Tab.Navigator>
  );
}
