import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {css} from '../assets/css/Css'


export default function Home(props){
    console.log(props)
    return(
       <View style={css.container2}>
           
           <TouchableOpacity
                  style={css.button__home}
                    onPress={() => props.navigation.navigate('Login') }
           > 
           <Image
           style={css.button}
           source={require('../assets/img/buttonLogin.png')}
           ></Image>
           
           </TouchableOpacity> 
           <TouchableOpacity
                  
                    onPress={() => props.navigation.navigate('Rastreio') }
           > 
           <Image
           style={css.button}
           source={require('../assets/img/buttonBusca.png')}
           ></Image>
           
           </TouchableOpacity>
       </View>
    )
}