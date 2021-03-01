import React, { useEffect ,useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button,ScrollView ,TouchableOpacity} from 'react-native';



const Cities = (props) => {
    const [cities , setCities] = useState([])
    
    useEffect(() => {
        fetch('https://mytinerarymobile.herokuapp.com/cities') 
        .then(respuesta => respuesta.json())
        .then(data => setCities(data.respuesta))    
    }, [])
 
    return(
        <ScrollView>
            <View style={styles.box3}>
                {cities.map(city =>{              
                   return(
                    <View style={styles.box1}>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Itineraries' ,{cityId: city._id , cityPic: city.cityPic , cityTitle: city.cityName})}>
                            <ImageBackground style={styles.box2} source={{uri:city.cityPic}} resizeMode='cover'>
                                <Text style={styles.textCity}>{city.cityName}</Text> 
                            </ImageBackground> 
                       </TouchableOpacity>
                    </View>
                   )
                })}    
            </View>
        </ScrollView>   
    )  
}
const styles  = StyleSheet.create({
    box3:{
        backgroundColor:'black'
    },
    box2:{
        width: 380,
        height: 180,
        margin :15,
        alignItems:'center',
        justifyContent:'center',    
     },
     box1:{
        alignItems:'center',
        justifyContent:'center',  
     },
     textCity:{
         backgroundColor:'rgba(0, 0, 0, 0.466)',
         width:400,
         textAlign:'center',
         fontWeight:'500',
         color:'white',
         fontSize:23

     }

    })      



export default Cities

