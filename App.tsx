/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import HomeScreen from './pages/HomeScreen'
// import Props1 from './pages/Props1'
//import ScrollViewdisplay from './pages/ScrollViewdisplay'
//import InputText from './pages/InputText'
//import  FlatList1  from './pages/FlatList1';
//import SectionList1 from './pages/SectionList1'

import {NavigationContainer} from '@react-navigation/native'
//import {StackNavigator} from '../MyApp/AllNavigation/StackNavigator';
import BottomTabNavigator from '../MyApp/AllNavigation/BottomTabNavigator'
// import StackNavigator from '../MyApp/Navigation/StackNavigator'
//import BottomTabNavigator from '../MyApp/Navigation/BottomTabNavigator'
//import DrawerNavigator from '../MyApp/Navigation/DrawerNavigator'


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
 // const safeAreaInsets = useSafeAreaInsets();

  return (
      <NavigationContainer>
         <BottomTabNavigator/>
      </NavigationContainer>
   

       // {/* <BottomTabNavigator/> */}
       //  {/* <DrawerNavigator/> */}
    // <View  style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      
    // {/* <HomeScreen/> */}
    // {/* <Props1/> */}
    // {/* <ScrollViewdisplay/> */}
    // {/* <InputText/> */}
    // {/* <FlatList1/> */}
    // {/* <SectionList1/> */}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
