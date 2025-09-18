import { View,Text,StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
  return (
        <View style={styles.container}>
            <Text style={styles.title} >This is First React Native Project</Text>
            <Button title='Go to Input Text' onPress={()=>navigation.navigate("InputText")}></Button>
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