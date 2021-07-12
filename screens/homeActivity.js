import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Text,Alert, Image,TouchableWithoutFeedback,TouchableOpacity, Keyboard } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


export default function HomeActivity({navigation}) {
  const [exercicios, setExercicios] = useState(
      [
          { text: 'Yoga',
            image: require('../assets/icon/icon_yoga.png'),
            key: '1' 
          },
          { 
            text: 'Aerobica',
            image:require('../assets/icon/icon_airobica.png'), 
            key: '2' 
          },
          { text: 'Crossfit',
            image: require('../assets/icon/icon_crossfit.png'), 
            key: '3' 
          },
          { text: 'Corrida',
            image:require('../assets/icon/icon_corrida.png'), 
            key: '4' },
          { text: 'Musculacao',
            image:require("../assets/icon/icon_muscu.png"), 
            key: '5' 
          },
      ]
  ) 
  return (
      <View styles>
          <View style={styles.list}>
          <FlatList  
              data={exercicios}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate(item.text)}}>
                  <Image style={styles.tinyLogo} source={ item.image} />
                  <Text style={styles.title}>{item.text}</Text>
                </TouchableOpacity>
          )}
          />               
          </View> 
    </View>

  );
}
const styles = StyleSheet.create({
  title: {
    fontSize:20,
    paddingLeft:10,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    resizeMode:'contain',
    width: 100,
    height: 100,
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
  }
});
