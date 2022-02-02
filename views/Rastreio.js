import React from "react";
import { Text, View, Button } from 'react-native';

export default function Rastreio(props){
    console.log(props)
    return(
       <View>
           <Text>Rastreio</Text>
           <Button title="Ir para o Login" onPress={() => props.navigation.navigate('Login') }></Button>
       </View>
    )
}