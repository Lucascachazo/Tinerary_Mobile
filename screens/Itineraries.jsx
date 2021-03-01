import React, { useEffect ,useState} from 'react'
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button,ScrollView} from 'react-native';


 const Itineraries = (props) => {
     const id = props.route.params.cityId
     const foto = props.route.params.cityPic
    const titulo =props.route.params.cityTitle

     const [itineraries , setItineraries] = useState([])
    
  
    useEffect(() => {
            fetch('https://mytinerarymobile.herokuapp.com/itineraries/'+id) 
            .then(respuesta => respuesta.json())
            .then(data => setItineraries(data.respuesta)) 
        }, [])
    


 return (
     <>
     <View style={styles.box3}>
        <ScrollView>
             <ImageBackground source={{uri:`${foto}`}} style={{width:400 , height:200}} resizeMode='cover'>
                <Text style={styles.titleF}>{titulo}</Text>
             </ImageBackground>

            {itineraries.length === 0 
                ? <View style={styles.contenedorInt}><Text style = {styles.textNoitineraries}>NO INTINERARIES YET</Text ></View>
                : itineraries.map(itinerary=>{ 
                            
                return(
                    <View style = {styles.contenedor}>
                        <Text style = {styles.titleP}>{itinerary.title}</Text>
                        <View style = {styles.box4}>
                            <View>
                                <Image source={{uri:itinerary.userPic}} style = {{width:120 , height:120, borderRadius:100}} resizeMode='contain'></Image>
                                <Text style = {styles.textCity1}>{itinerary.userName}</Text>
                            </View>
                            <View style = {styles.box5}>
                                <Text style = {styles.textCity}><Entypo name="credit" size={24} color="green"/>  {itinerary.price}</Text>
                                <Text style = {styles.textCity}><Ionicons name="md-heart-sharp" size={24} color="red"/>  {itinerary.likes}</Text> 
                                <Text style = {styles.textCity}><MaterialCommunityIcons name="clock-time-three" size={24} color="orange"/>  {itinerary.hours} hs</Text> 
                                <Text style = {styles.textCity}>{itinerary.hashtag}</Text>
                            </View>
                        </View>
                    </View>
                )
                })}    
        </ScrollView>  
    </View> 

    </>
  )
}
const styles  = StyleSheet.create({

    contenedorInt:{
        
        backgroundColor:'rgba(119, 115, 115, 0.344)',
        marginBottom:10,
        marginTop:45,
        borderRadius:15,
        borderWidth:1,
        borderRadius:20,
        borderColor:'yellow',
        height:150
            

    },
    contenedor:{
        backgroundColor:'rgba(119, 115, 115, 0.344)',
        flex:1,
        marginBottom:30,
        justifyContent:'space-between',
        padding:25,
        borderRadius:15,
        marginTop:15,
        borderWidth:1.5,
        borderRadius:20,
        borderColor:'yellow'
        
    },

    box4:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    box3:{
        backgroundColor:'black',

     },
     box1:{
        alignItems:'center',
        justifyContent:'center',   
     },
     textCity:{
         width:400,
         fontWeight:'500',
         color:'white',
         fontSize:23,
         marginLeft:80,
         fontSize:20,
         margin:5,
     },
    textNoitineraries:{
        width:400,
        fontWeight:'500',
        color:'white',
        fontSize:23,
        textAlign:'center',
        marginTop:60
        

    },
     textCity1:{
         marginRight:1,
         alignItems:'center',
         fontSize:20,
         margin:5,
         color:'white'
     },
    titleP:{
      fontSize:20,
      color:'white',
      marginBottom:15,
      marginLeft:130

     },
     titleF:{
         marginTop:80,
         backgroundColor:'rgba(14, 13, 13, 0.650)',
         fontSize:25,
         color:'white',
         textAlign:'center',
     
        
     }

    })      


export default Itineraries
