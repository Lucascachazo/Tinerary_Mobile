import React, { useState } from 'react'
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
import {TouchableHighlight,Keyboard, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button, Alert, TouchableWithoutFeedback} from 'react-native';

const SignUp =(props) => {
    const [nuevoUsuario ,setNuevoUsuario]=useState({})
    const [usuarioRegistrado , setUsuarioRegistrado] = useState('')

    const leerInput =((name , value) => {  
        setNuevoUsuario({
            ...nuevoUsuario ,[name]:value
        }) 
    })
    console.log(nuevoUsuario)


    const validarUsuario  = async e =>{
            Alert.alert("User Logged")
        
            if(nuevoUsuario.name === '' || nuevoUsuario.lastname === '' ) {

                Alert.alert ("All fields are required")
                return false
            }
            const respuesta = await props.registerUser(nuevoUsuario)

            if(respuesta && !respuesta.success ){
            
            }else {
                Alert.alert('¡Form Send!')
                props.navigation.navigate('SignIn')  
            }
        }
        return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <ImageBackground source={require('./assets/3.png')} style={styles.box2} >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>REGISTER</Text>
                        <TextInput placeholder = 'NAME' style={styles.input} 
                        onChangeText={(value)=>leerInput ('name',value)}/>
                        <TextInput placeholder = 'LAST NAME' style={styles.input}
                          onChangeText={(value)=>leerInput ('lastName',value)}/>

                        <TextInput placeholder = 'USER NAME' style={styles.input} 
                        onChangeText={(value)=>leerInput ('username',value)}/>
                        <TextInput placeholder = 'EMAIL' style={styles.input} 
                        onChangeText={(value)=>leerInput ('email',value)}/>
                        <TextInput placeholder = 'PASSWORD' style={styles.input}
                        onChangeText={(value)=>leerInput ('password',value)} secureTextEntry />

                    </View>
                    <TouchableHighlight style={styles.button} >
                        <Text style={styles.textButton} onPress={validarUsuario}>SEND</Text>
                    </TouchableHighlight>
                </View>
        </ImageBackground>
        </TouchableWithoutFeedback>
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


  const mapStateToProps = state => {
    return {
        loggedUser: state.authReducer.registerUser
    }
    
}


const mapDispatchToProps = {
    registerUser : authAction.registerUser
}

export default connect (mapStateToProps,mapDispatchToProps)(SignUp)




 
