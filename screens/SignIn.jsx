import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';


const SignIn =() => {
    return (<>
        <ImageBackground source={require('./assets/4.png')} style={styles.box2} >

           <View style={styles.container}>
               <View>
                   <Text style={styles.title}>SIGN IN</Text>
                   <TextInput placeholder='USER'style={styles.input}/>
                   <TextInput placeholder='PASSWORD'style={styles.input}/>
               </View>
               <TouchableHighlight
                 style={styles.button}      >
                   <Text style={styles.textButton}>SEND</Text>
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
        marginTop:'70%',
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
        marginTop:40,
        color:'rgba(11,97,40,1)',
        fontWeight:'700' 
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


  
