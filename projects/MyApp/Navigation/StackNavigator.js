// import { createStackNavigator } from '@react-navigation/stack'
// import HomeScreen from '../pages/HomeScreen'
// import InputText from '../pages/InputText' 

// const Stack=createStackNavigator()
// export default function StackNavigator() {
//   return (
//     <Stack.Navigator>
//         <Stack.Screen name='HomeScreen'
//          component={HomeScreen} 
         

//         ></Stack.Screen>
//         <Stack.Screen name='InputText' component={InputText}></Stack.Screen>
//     </Stack.Navigator>
   
//   )
// }


import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../pages/HomeScreen'
import InputText from '../pages/InputText'
import AboutUs from '../pages/AboutUs'

const StackNavigator=()=> {
    const stack=createStackNavigator()
  return (
   <stack.Navigator>
    <stack.Screen name='HomeScreen' component={HomeScreen}></stack.Screen>
    <stack.Screen name='InputText' component={InputText}></stack.Screen>
   </stack.Navigator>
  )
}


const Contant=()=>{
    <stack.Navigator>
        <stack.Screen name='AboutUs' component={AboutUs}></stack.Screen>
        <stack.Screen name='HomeScreen' component={HomeScreen}></stack.Screen>
        <stack.Screen name='InputText' component={InputText}></stack.Screen>
    </stack.Navigator>
}


export {StackNavigator,Contant}

