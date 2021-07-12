import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function Yoga({navigation}) {
  return (
    <View style={styles.view}>

      <Image style={styles.tinyLogo} source={require('../../assets/exercicios/yoga.jpg')} />
      <Text style={styles.text}>● Sente-se com as pernas estendidas e retas para frente, em seguida, dobre os joelhos e coloque os pés no chão.</Text>
      <br></br>
      <Text style={styles.text}>● Deslize o pé esquerdo sob o joelho direito para fora do quadril direito.</Text>
      <br></br>
      <Text style={styles.text}>● Em seguida, cruze a perna direita sobre a esquerda, empilhando o joelho direito sobre o esquerdo, e traga o pé direito para fora do quadril esquerdo.</Text>
      <br></br>
      <Text style={styles.text}>● Tente trazer os calcanhares equidistantes dos quadris: com a perna direita para cima, você terá que puxar o calcanhar direito para mais perto do quadril esquerdo. </Text>
      <br></br>
      <Text style={styles.text}>● Sente-se uniformemente sobre os ísquios.</Text>
    </View>
    
  );}
  const styles = StyleSheet.create({
    view:  { 
      margin: 10,
      marginVertical:20,
      borderRadius:10,
      backgroundColor: '#5c9bf9',
      flex: 1, 
      justifyContent: 'center' 
    },
    text: {
      fontWeight: "500", 
      fontSize:15,
      padding:10,
    },
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      alignSelf:"center",
      width: 300,
      height: 250,
      borderRadius: 20,
      marginTop: 20,
    },
    item: {
      flexDirection: 'row',
      padding: 15,
      marginVertical:15,
      marginHorizontal:10,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 10,
    }
  });