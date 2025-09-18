import React from 'react';
import { View, SectionList,Text ,StyleSheet} from 'react-native';

export default function SectionList1() {
  return (
    <View style={styles.container}> 
      <SectionList
        sections={[
          { title: 'Owner', data: ['Surya'] },
          { title: 'Manager', data: ['Arumugam', 'Soniya', 'Aditya'] },
          {
            title: 'ClubWord Employees',
            data: ['Vignesh', 'Vishnu', 'Aditya', 'Rohit'],
          },
          {
            title: 'Scrapping Team',
            data: ['Alfid', 'Jyoshna', 'Nagani', 'Dharma'],
          },
          { title: 'Others', data: ['Harini', 'Mahesh'] },
        ]}
        renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
        keyExtractor={item => `basicListEntry-${item}`}
      ></SectionList>
    </View>
  );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
    },
    header:{
        fontWeight:'bold',
        fontSize:24,
        marginTop:10,
        marginBottom:10
    },
    list:{
        marginLeft:20
    }
    
})


