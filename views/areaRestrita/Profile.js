import React, {useState, useEffect} from "react";
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import {css} from '../../assets/css/Css'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile(props){

    const [senhaAntiga, setSenhaAntiga] = useState(null)
    const [novaSenha, setNovaSenha] = useState(null)
    const [confNovaSenha, setConfSenha] = useState(null)

    useEffect(()=>{
        async function getIdUser(){
            let response = AsyncStorage.getItem('userData')
            let json=JSON.parse(response)
            console.log(json.id)
        }
        getIdUser()
    })

    return(
       <View>
       <View style={css.area__menu}>
        <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
            <Icon name="home" size={20} color="#999"></Icon>
        </TouchableOpacity>
    
        <Text style={css.area__title}>Profile</Text>
    
        <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
            <Icon name="sign-out" size={20} color="#999"></Icon>
        </TouchableOpacity>
        </View>
     <View>
        <TextInput placeholder='Senha Antiga:' ></TextInput>    
        <TextInput placeholder='Nova Senha:' ></TextInput>    
        <TextInput placeholder='Confirmar senha:' ></TextInput>    
        
        
        <TouchableOpacity>
            <Text>Trocar</Text>
        </TouchableOpacity>
        
        </View>    
        </View>
    
    
        )



 
   
}