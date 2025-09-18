import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../pages/HomeScreen'
import InputText from '../pages/InputText'
import AboutUs from '../pages/AboutUs'
import SectionList1 from '../pages/SectionList1'
const stack=createStackNavigator()

const StackNavigator=()=> {
  return (
   <stack.Navigator >
    <stack.Screen name='HomeScreen' component={HomeScreen}></stack.Screen>
    <stack.Screen name='InputText' component={InputText}></stack.Screen>
   </stack.Navigator>
  )
}

const Contant=()=>{
    return(
    <stack.Navigator >
        <stack.Screen name='AboutUs' component={AboutUs}></stack.Screen>
        <stack.Screen name='SectionList' component={SectionList1}></stack.Screen>
    </stack.Navigator>
    )
}


export {StackNavigator,Contant}

