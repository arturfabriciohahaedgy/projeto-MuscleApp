import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeActivity from '../screens/homeActivity'

import Musculacao from '../screens/activityList/musculacao'
import Yoga from '../screens/activityList/yoga';
import Aerobica from '../screens/activityList/aerobica';
import Crossfit from '../screens/activityList/crossfit';
import Corrida from '../screens/activityList/corrida';



export default function activityStack({navigation}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeActivity"  component={HomeActivity} 
        options={{
            headerTitle: "Exercicios",
            headerStyle: {
              backgroundColor: '#5c9bf9',
            },
            headerLeft: () => (
              <Ionicons 
                name="menu" 
                size={32} 
                style={{ paddingLeft:10,    }}
                onPress={
                  () =>{navigation.openDrawer()}
                } 
              />
            ),
          }}/>
      <Stack.Screen name="Yoga" component={Yoga}
        options={{
        headerStyle: {
          backgroundColor: '#5c9bf9',
        },} }/>
      <Stack.Screen name="Aerobica" component={Aerobica}
      options={{
        headerStyle: {
          backgroundColor: '#5c9bf9',
        },} } />

      <Stack.Screen name="Crossfit" component={Crossfit}
        options={{
          headerStyle: {
            backgroundColor: '#5c9bf9',
          },} } />

      <Stack.Screen name="Corrida" component={Corrida} 
      options={{
        headerStyle: {
          backgroundColor: '#5c9bf9',
        },} }/>

      <Stack.Screen name="Musculacao" component={Musculacao} 
      options={{
        headerStyle: {
          backgroundColor: '#5c9bf9',
        },} }/>
    </Stack.Navigator>
  );
}