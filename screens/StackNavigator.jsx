import 'react-native-gesture-handler'
import React, {useState,useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Cities from './Cities'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Landing from './Landing'
import Itineraries from './Itineraries'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import {Button ,Alert, ToastAndroid} from 'react-native'

const Stack = createStackNavigator()

function StackNavigator() {
    const [user, setUser] = useState()

    // useEffect(() => {
    //   persistencia()
    // },[])
    
    // const persistencia = async () => {
    //   var usuarioGuardado = await AsyncStorage.getItem('usuarioRegistrado')
    //   setUser(JSON.parse(usuarioGuardado))
    // }
    return (
          <Stack.Navigator>  
          <Stack.Screen name = "Landing" component = {Landing} options={{
            title: "Welcome to Home", headerRight: () => (<Button title={user ? user.userName : "Menú"} />)
          }} />
          <Stack.Screen name = "SignIn" component = {SignIn}/> 
          <Stack.Screen name="Cities" component={Cities}/> 
          <Stack.Screen name="SignUp" component={SignUp}/> 
          <Stack.Screen name="Itineraries" component={Itineraries}/> 
          </Stack.Navigator> 
    )
  }
  export default StackNavigator

