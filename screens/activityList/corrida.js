import React from 'react';
import { Button, View, Text, StyleSheet,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function Corrida({navigation}) {
  return (
    <View style={styles.view}>
      <Image style={styles.tinyLogo} source={require('../../assets/exercicios/corrida.jpg')} />
      <Text style={styles.text}>● Com a barra no chão, fique em pé com o meio dos pés abaixo da barra; canelas aprox. 3 polegadas da barra de toque.</Text>
      <br></br>
      <Text style={styles.text}>● Assuma uma postura na largura do quadril, com os pés inclinados para fora.</Text>
      <br></br>
      <Text style={styles.text}>● Flexione os quadris para abaixar o tronco logo acima do paralelo enquanto flexiona os joelhos até que as canelas toquem a barra.</Text>
      <br></br>
      <Text style={styles.text}>● Segure a barra com uma pegada mista na largura dos ombros (uma mão por cima, uma mão por baixo); toque a parte interna dos antebraços na parte externa dos joelhos. </Text>
      <br></br>
      <Text style={styles.text}>● Trave os cotovelos, levante o peito e traga os ombros para trás para endireitar as costas.</Text>
      <br></br>
      <Text style={styles.text}>● Puxe contra a barra (sem levantá-la), mantendo os quadris elevados, para criar tensão em todo o corpo.</Text>
      <br></br>
      <Text style={styles.text}>● As omoplatas, barra e meio do pé devem ser alinhados verticalmente a partir de uma vista lateral.</Text>
      <br></br>
      <Text style={styles.text}>● Mantenha uma coluna neutra durante todo o movimento de levantamento terra.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view:  { 
    margin: 10,
    marginVertical:20,
    borderRadius:10,
    backgroundColor: '#5c9bf9',
    flex: 1, 
    justifyContent: 'center' 
  },
  title: {
    fontSize:20,
    paddingLeft:10,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    alignSelf:"center",
    resizeMode:'contain',
    width: 300,
    height: 300,
    borderRadius: 30,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical:15,
    marginHorizontal:10,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontWeight: "500", 
    fontSize:15,
    padding:10,
  },
});