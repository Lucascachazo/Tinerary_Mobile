import React, { useEffect ,useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button,ScrollView} from 'react-native';

const fotos =[
    {name:"Roma" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Italia" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Japon" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"},
    {name:"Rusia" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Suecia" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"},
    {name:"Italia" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Japon" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"},
    {name:"Rusia" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Suecia" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"},
    {name:"Japon" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"},
    {name:"Rusia" , pic:"https://www.infobae.com/new-resizer/PV03eXWTuBVAAe1ORBqY5yvtG9c=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181836/cincuenta-ciudades-singapore.jpg"},
    {name:"Suecia" , pic:"https://www.infobae.com/new-resizer/UKBjHHaJwokhy2CBo9bTvPzB-qI=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20181725/cincuenta-ciudades-nombre-paris.jpg"}

]


const Cities = () => {
// const [cities , setCities] = useState([])

   
    return(
      
        <ScrollView>
            <View style={styles.box3}>
                {fotos.map(city =>{              
                   return(
                    <View style={styles.box1}>
                       <ImageBackground style={styles.box2} source={{uri: city.pic}} resizeMode='cover'>
                           <Text style={styles.textCity}>{city.name}</Text> 
                       </ImageBackground>  
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
        height: 150,
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
         width:300,
         textAlign:'center',
         fontWeight:'400',
         color:'white'

     }

    })      



export default Cities
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(json => console.log(json))



 // useEffect(() => {
    //     fetch('http://localhost:4000/cities') 
    //     .then(respuesta => respuesta.json())
    //     .then(data => setCities(data.respuesta))    
    // }, [])


//     <View style={styles.box3}>
//     <Text>Holaaa</Text>
//     {cities.map(city =>{              
//        return(
//         <View style={styles.box1}>
//            <ImageBackground style={styles.box2} source={{uri: city.cityPic}} resizeMode='cover'>
//                <Text style={styles.textCity}>{city.cityName}</Text> 
//            </ImageBackground>  
//         </View>
//        )
//     })}    
// </View>
