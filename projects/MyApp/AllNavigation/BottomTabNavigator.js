import React from 'react'
import {StackNavigator,Contant} from '../AllNavigation/StackNavigator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function BottomTabNavigator() {
    const Tab=createBottomTabNavigator()
  return (
    <Tab.Navigator >
        <Tab.Screen name='Home' 
        component={StackNavigator}
        options={{
            tabBarLabel:'HomeScreen',
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>
                
            )

        }}></Tab.Screen>
        <Tab.Screen name='About' 
        component={Contant}
        options={{
            tabBarLabel:'HomeScreen',
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="info" color={color} size={size}></MaterialCommunityIcons>
                
            )

        }}></Tab.Screen>
    </Tab.Navigator>
  )
}
