import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native'
import Cities from './screens/Cities'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Landing from './screens/Landing'
import Itineraries from './screens/Itineraries'

const Stack = createStackNavigator()

 function App() {
  return (
  <>
  
     <NavigationContainer>
        <Stack.Navigator>  
        <Stack.Screen name = "Home" component = {Landing}/> 
        <Stack.Screen name = "SignIn" component = {SignIn}/> 
        <Stack.Screen name="Cities" component={Cities}/> 
        <Stack.Screen name="SignUp" component={SignUp}/> 
        <Stack.Screen name="Itineraries" component={Itineraries}/> 
        </Stack.Navigator> 
    </NavigationContainer>
  </>
  )
}
  export default App



