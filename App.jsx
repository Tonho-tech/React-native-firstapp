import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { css } from './assets/css/Css'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Login,Rastreio} from './views'
import  AreaRestrita from './views/areaRestrita/AreaRestrita'



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Home',
        headerStyle:{backgroundColor: '#5768D4'},
        headerTintColor:'#333',
        headerTitleStyle:{alignSelf: 'center'}
      }} /> 
      <Stack.Screen name="Login" options={{
        headerShown:false
        }} component={Login}  />
      <Stack.Screen name="Rastreio" component={Rastreio} />
      <Stack.Screen name="AreaRestrita" options={{
        headerShown:false
       }}component={AreaRestrita}
       />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}
 

