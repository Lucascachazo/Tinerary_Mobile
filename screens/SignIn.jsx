import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button ,Alert, ToastAndroid} from 'react-native';


const SignIn =() => {

    const enviado = () =>{Alert.alert ('Esta seguro que desea ingresar?',[
        {text:'SI', onPress:()=> ToastAndroid.show('Ingresando',ToastAndroid.LONG)},
        {text:'NO', onPress:()=> ToastAndroid.show('Hasta Luego',ToastAndroid.LONG)}
    ])
} 

    const [value , setValue] = useState('')
    return (
    <>
        <ImageBackground source={require('./assets/4.png')} style={styles.box2}>
            <View style={styles.container}>
                <View>
                    {/* <Text style={styles.input} >{value}</Text> */}
                    
                    <Text style={styles.title}>SIGN IN</Text>
                    <TextInput placeholder='USER'style={styles.input}  onChangeText={(value) => setValue(value)}/>
                    <TextInput secureTextEntry placeholder='PASSWORD'style={styles.input} onChangeText={(value) => setValue(value)}/>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.textButton} onPress={enviado}>SEND</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
     </>
      
    )
}

const styles = StyleSheet.create({
    box2: {
        flex: 1,
   },
    container:{
        marginTop:'50%',
        paddingLeft:15,
        paddingRight:15,
    },
    input:{
        height:50,
        borderColor:'black',
        borderWidth:2,
        marginBottom:20,
        padding:10,
        textAlign:'center',
        color:'black',
        fontSize:20
    },
    title:{
        textAlign:'center',
        fontSize:25,
        marginBottom:30,
        marginTop:40,
        color:'white',
        fontWeight:'600' 
    },
    button:{
        backgroundColor:'rgba(11, 97, 40, 0.556)',
        paddingTop:15,
        paddingBottom:15,
        borderColor:'green',
        borderWidth:2,
        width:'50%',
        marginLeft:95   
    },
    textButton:{
        textAlign:'center',
        color :'black',
        fontWeight:'700',
        
    }
  })
export default SignIn


  
