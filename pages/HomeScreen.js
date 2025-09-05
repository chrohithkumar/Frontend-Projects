import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function HomeScreen() {
  return (
        <View style={styles.container}>
            <Text style={styles.title} >This is First React Native Project</Text>
        </View>
      
  )
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center", 
        height:'100vh'
    },
    title:{
         fontSize:24,
        fontWeight:'bold'
    }
})