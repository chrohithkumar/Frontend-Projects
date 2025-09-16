import React from 'react';
import { Button, View ,Text} from 'react-native';

export default function AboutUs({navigation}) {
  return (
    <View>
      <Text> This is AboutUs pages</Text>
      <Button title='Go to SectionList' onPress={()=>navigation.navigate('SectionList')}></Button>
      </View>
  );
}
