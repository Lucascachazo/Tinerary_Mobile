import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';


const SignUp =() => {
    return (
        <ImageBackground source={require('./assets/3.png')} style={styles.box2} >

        <View style={styles.container}>
            <View>
                <Text style={styles.title}>REGISTER</Text>
                <TextInput placeholder='USER'style={styles.input}/>
                <TextInput placeholder='PASSWORD'style={styles.input}/>
                <TextInput placeholder='USER'style={styles.input}/>
                <TextInput placeholder='PASSWORD'style={styles.input}/>

            </View>
            <TouchableHighlight
              style={styles.button}      >
                <Text style={styles.textButton}>SEND</Text>
            </TouchableHighlight>
        </View>
     </ImageBackground>
    )
}

const styles = StyleSheet.create({
    box2: {
        flex: 1,
        
   },

    container:{
        marginTop:'30%',
        paddingLeft:15,
        paddingRight:15,
    },
    input:{
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginBottom:20,
        padding:10,
        textAlign:'center',
    },
    title:{
        textAlign:'center',
        fontSize:25,
        marginBottom:30,
        marginTop:0,
        color:'black',
        fontWeight:'700' 
    },
    button:{
        backgroundColor:'white',
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


export default SignUp
