import React from 'react';
import { View, FlatList,Text,StyleSheet } from 'react-native';

export default function FlatList1() {
  return <View style={styles.container}>
    <Text style={styles.heading} >This is FlatList</Text>
    <FlatList
        data={[
            {key:'dharma'},
            {key:'rohit'},
            {key:'vijay'},
            {key:'Vishnu'}
        ]}
        renderItem={({item})=><Text style={styles.list}> Hello {item.key}</Text>}>
    </FlatList>
  </View>;
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    list:{
        fontSize:20,
        margin:5,
    }

})