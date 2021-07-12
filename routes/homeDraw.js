import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';


import ActivityStack from '../routes/activityStack'
import Perfil from '../screens/perfil'
import Imc from '../screens/imc';

export default function HomeDraw({Navigation}) {
  const Drawer = createDrawerNavigator();
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Perfil" component={stackPerfil} />
        <Drawer.Screen name="Home" component={ActivityStack}/>
        <Drawer.Screen name="Imc" component={stackImc}/>
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

function stackPerfil({navigation}) {
  const Stack = createStackNavigator();
  return (

    <Stack.Navigator>
      <Stack.Screen name="default"  component={Perfil} 
        options={{
            headerTitle: "Perfil",
            headerStyle: {
              backgroundColor: '#5c9bf9',
            },
            headerLeft: () => (
              <Ionicons 
                name="menu" 
                size={32} 
                style={{ paddingLeft:10 }}
                onPress={
                  () =>{navigation.openDrawer()}
                } 
              />
            ),
          }}/>
      </Stack.Navigator>
      )}

function stackImc({navigation}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Default"  component={Imc} 
        options={{
            headerTitle: "Imc",
            headerStyle: {
              backgroundColor: '#5c9bf9',
            },
            headerLeft: () => (
              <Ionicons 
                name="menu" 
                size={32} 
                style={{ paddingLeft:10 }}
                onPress={
                  () =>{navigation.openDrawer()}
                } 
              />
            ),
          }}/>
      </Stack.Navigator>
      )}