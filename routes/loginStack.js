import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch, Alert, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { cadastroInit } from '../screens/loginHome/login';
import { cadastroReg } from '../screens/loginHome/cadastro-registro';
import { cadastroInfo } from '../screens/loginHome/cadastro-info';
import HomeDraw from '../routes/homeDraw';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // headerStyle: {
      //   height: 0,
      // }
    }
  }
    >
      <Stack.Screen name="Login" component={cadastroInit} /> 
      <Stack.Screen name="Registro" component={cadastroReg}/>
      <Stack.Screen name="Informações" component={cadastroInfo}/>
      <Stack.Screen name="homedraw" component={HomeDraw}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },


  tituloMenor: {
    //para as frases menores dentro da tela, como a "senha" em cima do text input da senha, ou o "Email ou Usuario" em cima do text input dele
    //position: 'center',
    //width: "114px",
    height: 20,
    left: 16,
    top: 217,

    fontFamily: 'verdana',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#003E92',
  },

  tituloMenor2: {
    //uma variação do tituloMenor comum
    //position: 'center',
    //width: "131px",
    height: 25,
    left: 16,
    top: 456,

    fontFamily: 'verdana',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    color: '#2F80ED',
  },

  titulo: {
    //width: "102px",
    height: 47,
    left: 16,
    top: 217,

    fontFamily: 'verdana',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 49,
    color: '#0500FF',
  },

  switch: {
    //position: 'center',
    width: 137,
    height: 25,
    left: 70,
    top: 487,
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    
  },

  input: {
    width: 293,
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    display: 'flex',
    color: '#828282',
  },

  butao1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#000000',
    //border: '1px solid #000000'
},

  butao1_text: {
    textAlign: 'center',
    fontWeight: 'bold' ,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    color: '#137CDD',
},});
