import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet,Button, Alert} from 'react-native'


export default function InputText({navigation}) {
    const [Name,SetName]=useState('')
    const [MobileNumber,setMobileNumber]=useState('')

    
   const handlePress = () => {
  if (!Name && !MobileNumber) {
    Alert.alert('Both fields are required');
  } else if (!Name) {
    Alert.alert('The Name is required before submission');
  } else if (!MobileNumber) {
    Alert.alert('The Mobile Number is required');
  } else {
    Alert.alert(
      'Success',
      `Form Submitted For ${Name} and Mobile Number ${Name}`
    );
    setTimeout(()=>{
          navigation.navigate("HomeScreen")
    },2000)
  }
};


  return (
   <View style={styles.container}>
        <View style={styles.block}>
            <Text>Name</Text>
            <TextInput style={styles.textinput} value={Name} onChangeText={SetName} ></TextInput>
        </View>
        <View style={styles.block}>
            <Text>Mobile Number</Text>
            <TextInput style={styles.textinput} value={MobileNumber} onChangeText={setMobileNumber} keyboardType='numeric'></TextInput>
        </View>
        <View style={styles.button1}>
            <Button title='Submit' onPress={handlePress}></Button>
        </View>
   </View>
  )
}


const styles=StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    textinput:{
        height:40,
        borderColor:'black',
        borderWidth:1,
        width:200,
        borderRadius:10
    },
    block:{
        marginTop:10
    },
    button1:{
        margin:10
    }
})