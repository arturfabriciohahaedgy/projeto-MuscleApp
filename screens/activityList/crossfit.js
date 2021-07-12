import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function Natacao({navigation}) {
  return (
    <View style={styles.view}>
      <Image style={styles.tinyLogo} source={require('../../assets/exercicios/crossfit.png')} />
      <Text style={styles.text}>● Antes de pegar uma barra de peso, é uma boa ideia mover-se com uma barra vazia, cano de PVC ou cabo de vassoura para aperfeiçoar sua forma. Abaixo, como fazer um power snatch no CrossFit, passo a passo, de acordo com Milgram e Rouse.</Text>
      <br></br>
      <Text style={styles.text}>A. Comece com a barra carregada no chão com os pés sob a barra, separados na largura do quadril, dedos ligeiramente virados para fora.</Text>
      <br></br>
      <Text style={styles.text}>B. Agache-se e posicione as mãos com uma pegada rápida (larga o suficiente para que, ao ficar em pé com os braços esticados, a barra fique na dobra do quadril). O ideal é usar uma alça de gancho (polegar ao redor da barra).</Text>
      <br></br>
      <Text style={styles.text}>C. Fique na posição inicial: aparafuse os dedos mínimos na barra para engajar os dorsais, levante os quadris de forma que fiquem ligeiramente mais altos do que os joelhos e empurre os joelhos para fora.</Text>
      <br></br>
      <Text style={styles.text}>D. Endireite as pernas enquanto puxa a barra para cima ao longo da frente do corpo com os braços esticados.</Text>
      <br></br>
      <Text style={styles.text}>E. Quando a barra tocar o meio das coxas, mova os quadris para frente (permitindo que os pés deixem o chão). Puxe os cotovelos para o alto para direcionar a barra acima da cabeça.</Text>
      <br></br>
      <Text style={styles.text}>F. Aterrisse em um quarto de agachamento (pés separados na largura dos ombros, dedos ligeiramente voltados para fora), enquanto se move rapidamente para uma posição de agachamento acima da cabeça sob a barra.</Text>
      <br></br>
      <Text style={styles.text}>G. Quando a barra estiver estável acima da cabeça, levante-se para concluir o levantamento antes de abaixar a barra de volta ao solo.</Text>
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