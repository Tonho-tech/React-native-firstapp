import React, {useState, useEffect} from "react";
import { Text, View, Button, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {css} from '../../assets/css/Css'
import  { TouchableOpacity } from "react-native";


export default function Config(){
return(
    



    
    <View style={css.configMenu}>
        <View style={css.containerText}>
            
        
        <Text style={css.texto1}>
        Touch ID
        </Text>
        <TouchableOpacity >
        <Switch>
        
        </Switch>
        
        </TouchableOpacity >
        <Text style={css.texto}>
        Dark Mode 
        </Text>        
        
        
        <TouchableOpacity>
        <Switch>
       
        </Switch> 
        </TouchableOpacity>
        </View>
        
    </View>
)
   
}