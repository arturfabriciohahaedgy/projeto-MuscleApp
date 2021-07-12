import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';   
import { useState } from 'react';
import { Button, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function Perfil({ navigation }) {
    
    const verificar = async ()=>{

            var value = await AsyncStorage.getItem('a_user');
            var result = JSON.parse(value);
            if (result !== null) {
                onChangeEmail(result.email)
                onChangePassword(result.senha)     
           } 
        
            
    }
    
  const [pickerResult, setPickerResult] = useState(require('../assets/preto.png'));
  const [Email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  verificar();

  
  

  
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    setPickerResult(result);
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
          <Image style={styles.image} source={ pickerResult} />
        </TouchableOpacity>
      </View>
      
        <Text style={styles.text}>Email:</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
        />
      <Text style={styles.text}>Senha:</Text>
      <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={Password}
            secureTextEntry={true}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,

  },

  text: {
    fontSize:20,
    marginTop:20,

  },
  input: {
    paddingLeft: 10,
    width: 293,
    height: 40,
    margin: 12,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    display: 'flex',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 1,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom:20,
  },
  
});
