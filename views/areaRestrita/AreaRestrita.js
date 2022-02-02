import React, {useState, useEffect} from "react";
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Profile, Cadastro, Edicao, Config} from '../index'
import { css } from "../../assets/css/Css";
import Icon from 'react-native-vector-icons/FontAwesome'


export default function AreaRestrita(){

    const Tab = createBottomTabNavigator();
    const [user, setUser] = useState(null)

    useEffect(()=> {
       async function getUser(){
           let response = await AsyncStorage.getItem('userData')
           let json =JSON.parse(response) 
           setUser(json.name)
       } 
       getUser()
    })

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor:"#333",
                 fontSize: 20,
                fontWeight:"bold",
                color: "#333"
            }
        }}
        
        >
        <Tab.Screen name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon:()=>(
                <Icon name="user" size={20} color="#999"/>
            ),
            headerShown:false
        }}
        />
        <Tab.Screen name="Cadastro" 
        component={Cadastro}
        options={{
            tabBarIcon:()=>(
                <Icon name="registered" size={20} color="#999"/>
            ),
            headerShown:false
        }} />
        <Tab.Screen name="Edicao" 
        component={Edicao}
        options={{
            tabBarIcon:()=>(
                <Icon name="edit" size={20} color="#999"/>
            ),
            headerShown:false
        }}
         />
        <Tab.Screen name="Config"
         component={Config}
         options={{
            tabBarIcon:()=>(
                <Icon name="gear" size={20} color="#999"/>
            ),
            headerShown:false
        }}
         />
      </Tab.Navigator>
    )
}