import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, Image,TouchableOpacity,  Text, View, TextInput, Platform} from 'react-native';
import { css } from "../assets/css/Css";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';


 




export default function Login(props){

   const [display, setDisplay] = useState('none')
   const [user, setUser] = useState(null)
   const [password, setPassword] = useState(null)
   const [login, setLogin] = useState(false)



   useEffect(() => {
      verifyLogin()
   }, [])
   
   useEffect(() => {
      if(login === true){
         biometric()
      }
   }, [login])


//verifica se o usuário ja possui algum login
async function verifyLogin(){
   let response = await AsyncStorage.getItem('userData')
   let json = await JSON.parse(response)
   if(json !== null) {
      setUser(json.name)
      setPassword(json.password)
      setLogin(true)

   }
}
//biometria

async function biometric(){
   let compatible = await LocalAuthentication.hasHardwareAsync()
   if(compatible){
      let biometricRecords = await LocalAuthentication.isEnrolledAsync()
      if(!biometricRecords){
         alert('Não possui TOUCH ID cadastrado')
      }else{
         let result = await LocalAuthentication.authenticateAsync()
         if(result.success){
            sendForm()
         }else{
            setUser(null)
            setPassword(null)
         }
      }
   }
}

   // envio do formulário de login para o backend

 async function sendForm(){
      let response = await fetch('http://192.168.0.104:3000/login',{
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            name: user,
            password: password
         }) 
      })


let json = await response.json()
if(json === 'error'){
   setDisplay('flex') 
   setTimeout(()=>{
      setDisplay('none')
   }, 3000)
   await AsyncStorage.clear()
  
}else{
   await AsyncStorage.setItem('userData', JSON.stringify(json))
   props.navigation.navigate('AreaRestrita')
}

   }


    return(
       <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}style={[css.container, css.darkbg]}>
            <View> 
               <Image style={css.button} source={require('../assets/img/icon.png')}/> 
               
            </View>  
            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
            </View>  
            <View style={css.login__form}> 
               <TextInput style={css.login__input}placeholder='Usuario:' onChangeText={text=> setUser(text)}></TextInput>
               <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=> setPassword(text)} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
               <Text style={css.login_buttonText}>Entrar</Text> 
            </TouchableOpacity>
 
 </View> 
       </KeyboardAvoidingView>
    )
}