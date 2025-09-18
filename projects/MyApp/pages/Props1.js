import React, { Component, useState } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

export const Props1 = props => {
  const [hidden,SetHidden]=useState(false)

  const handlePress=()=>{
    SetHidden(!hidden)
  }

  return (
    <View>
      <View>
          <Text>Monkey Name: {props.name}</Text>;
      </View>
      <View >
        <Text>{props.name} is get stomach {!hidden ? 'hungry':'Full'}  </Text>
        <Button title='Ckick here'  onPress={handlePress} disabled={!hidden}></Button>
      </View>
    </View>
  )
}; 



const LofofGreeting = () => {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text>The Monkeys Were:</Text>
        <Props1 name="Aditya" />
        <Props1 name="Dharma" />
      </View>
      <View style={styles.div1}>
        <Props1 name='Rohit'></Props1>
        <Props1 name='Vijay'></Props1>
      </View>
    </View>
  );
};


const styles=StyleSheet.create({
  div1:{
    marginTop:20,

  }
})

export default LofofGreeting;

