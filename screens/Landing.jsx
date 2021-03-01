import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'

function Landing(props) {

  const userName = (props.route)
 
    
    return (
        <>
            <View style={styles.contenedorGral}>
                <ImageBackground style={styles.contenedorGral} source={require('./assets/2.png')}resizeMode='cover'>
                    <View style={styles.botonCaja} > 
                        <Text style={styles.tex1} onPress={()=> props.navigation.navigate('Cities')}>GO TO CITIES</Text>
                     </View>
                     <View style={styles.botonCaja} > 
                        <Text style={styles.tex1} onPress={()=> props.navigation.navigate('SignIn')}>SIGN IN</Text>
                     </View>
                     <View style={styles.botonCaja} > 
                        <Text style={styles.tex1} onPress={()=> props.navigation.navigate('SignUp')}>REGISTER</Text>
                     </View>
                </ImageBackground> 
            </View>  
       </> 
    )
}

const styles  = {
 
  
    botonCaja:{
      marginTop:8,
      backgroundColor:'rgba(124, 414, 49, 0.781)',
      width:'50%',
      marginLeft:'25%',
      borderRadius:8,
      padding:8.5,
      border:'12 solid black',
      alignItems:'center', 
    },
   
    contenedorGral:{
      flex: 1,
      justifyContent:'center', 
    },
  
    text1:{
      textAlign:'center',
      justifyContent:'center', 
    }
  
  }
  
export default Landing


 // console.log(userName)

    // useEffect(()=>{
    //   persistencia()
    // })
    // const persistencia = async () =>{
    //   var usuarioGuardado = await AsyncStorage.getItem('usuarioRegistrado')
    //   console.log(JSON.parse(usuarioGuardado))

    // }