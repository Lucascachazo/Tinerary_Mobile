import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, 
  StyleSheet, 
  Text, 
  View ,Keyboard,
  TouchableWithoutFeedback, ImageBackground, TextInput ,Button ,Alert, ToastAndroid} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import authAction from '../redux/actions/authAction'
import {connect} from 'react-redux'


const SignIn =(props) => {
    console.log(props)
    const [usuarioRegistrado , setUsuarioRegistrado] = useState({})
    const [errores , setErrores] = useState([])

    const leerInput =((name , value) => {
       setUsuarioRegistrado({
       ...usuarioRegistrado ,[name]:value
    })
 })

  const validarUsuario  = async e =>{
    if(usuarioRegistrado.username === '' || usuarioRegistrado.password === '' ) {
        Alert.alert ("todos los campos son obligatorios y deben ser completados")
        return false
    }
    setErrores([])

    const respuesta = await props.loginUser(usuarioRegistrado)
    if(respuesta && !respuesta.success ){
        Alert.alert("All fields are required")
        setErrores([respuesta.mensaje])
        errores.map(error => console.log(error))
            
    } else {
        console.log('me loguee')
      Alert.alert('Welcome To MyTinerary!')  
      props.navigation.navigate('Landing')    
    }      
  }
    return (
    <>
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <ImageBackground source={require('./assets/4.png')} style={styles.box2}>
            <View style={styles.container}>
                  <View>
                      <Text style={styles.title}>SIGN IN</Text>
                      <TextInput placeholder = 'USER' style={styles.input} 
                        onChangeText={(value)=>leerInput ('username',value)}/>
                      <TextInput secureTextEntry placeholder = 'PASSWORD' style={styles.input}
                        onChangeText={(value)=>leerInput ('password',value)}/>
                  </View>
                  <TouchableHighlight style={styles.button}
                        onPress={validarUsuario}>
                          
                      <Text style={styles.textButton}>SEND</Text>  
                  </TouchableHighlight>
            </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
        
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
        height:60,
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
  const mapStateToProps = (state)=>{

    return{
      loggedUser: state.authReducer.loggedUser   
    }
}

const mapDispatchToProps = {
    loginUser: authAction.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)



// try{
//   await AsyncStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioRegistrado))
//     var usuarioGuardado = await AsyncStorage.getItem('usuarioRegistrado')
//     setLogueado(usuarioGuardado)
//     
// }
// catch (error){
//   console.log(error)
// }
// Alert.alert ('¡WELCOME!')


  
