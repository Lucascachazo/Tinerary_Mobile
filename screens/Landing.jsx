import React from 'react'
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';
import SignIn from './SignIn'
import Cities from './Cities'

function Landing({navigation}) {
    
    return (
        <>
            <View style={styles.contenedorGral}>
                <ImageBackground style={styles.contenedorGral} source={require('./assets/2.png')}resizeMode='cover'>
                    <View style={styles.botonCaja} > 
                        <Text style={styles.tex1} onPress={()=> navigation.navigate('Cities')}>GO TO CITIES</Text>
                     </View>
                     <View style={styles.botonCaja} > 
                        <Text style={styles.tex1} onPress={()=> navigation.navigate('SignIn')}>SIGN IN</Text>
                     </View>
                   
                </ImageBackground> 
            </View>  
       </> 
    )
}

const styles  = {
 
  
    botonCaja:{
      marginTop:8,
      backgroundColor:'rgba(211, 214, 39, 0.781)',
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