import React, {useState, useEffect} from "react";
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {css} from '../../assets/css/Css'
import Icon from 'react-native-vector-icons/FontAwesome'



export default function Edição(props){

    return(
        <View style={css.area__menu}>
        <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
            <Icon name="home" size={20} color="#999"></Icon>
        </TouchableOpacity>
    
        <Text style={css.area__title}>Edição</Text>
    
        <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
            <Icon name="sign-out" size={20} color="#999"></Icon>
        </TouchableOpacity>
        
    </View>
        )



 
   
}