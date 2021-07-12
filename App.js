// This is full code for App.js
import React, { createContext,  useState } from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeDraw from './routes/homeDraw';
import LoginStack from './routes/loginStack';
import Perfil from './screens/perfil';

    
const _storeData = async () => {
  try {
    var bd_user = {
      thiago:{
        email:"thiago",
        senha:"123456"
      }
    };
    const jsonValue = JSON.stringify(bd_user);
    await AsyncStorage.mergeItem('bd_user',jsonValue);
  } catch (error) {
    console.log('1error');
  }
};


const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('bd_user');
    var result = JSON.parse(value);
    if (result !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    console.log('error');
  }
};

export default function App() {
  _storeData();
  //_storeData2();
  _retrieveData();
  // const [imc, setImc] = useState(0);
  // const values = { values: [imc, setImc] }
  // const ImcContext = createContext(values);
  return (
    // <ImcContext.Provider value={values}>
      <LoginStack/>
      // <HomeDraw/>
      // <Perfil/>
    // </ImcContext.Provider>
  )
}