import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'

function Landing(props) {
 
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
      marginTop:0,
      backgroundColor:'rgba(504, 414, 49, 0.881)',
      width:'50%',
      marginLeft:'24%',
      borderRadius:10,
      padding:5.5,
      borderWidth:3,
      alignItems:'center', 
      justifyContent:'flex-end', 
      marginBottom:50


    },
   
    contenedorGral:{
      flex: 1,
      justifyContent:'flex-end', 
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