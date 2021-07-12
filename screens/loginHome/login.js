import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function cadastroInit({ navigation }) {
    const [texto, onChangeUsuario] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
  
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    const verificar = async ()=>{
        try {
            var value = await AsyncStorage.getItem('bd_user');
            var result = JSON.parse(value);
          
            if (result !== null) {
                if(result[texto].senha == senha){
                    try {
                        const jsonValue = JSON.stringify(result[texto]);
                        console.log()
                        await AsyncStorage.setItem('a_user', jsonValue);
                        var rest = await AsyncStorage.getItem('a_user');
                        console.log(rest)
                        navigation.navigate('homedraw');
                      } catch {
                        console.log('error');
                      }
                }
            }
        } 
        catch {
            console.log('sem data');
        }    
    }




    // const mostrarLogo = () => {
    //     return(
    //         <View style={styles.container}>
    //             <Image
    //                 style={styles.logo}
    //                 source={require('./muscle.png')}
                
    //             />
    //         </View>
    //     )
    // }

    return(
      
    <View style={styles.container}>
      {/* <LinearGradient colors={['rgba(92, 155, 249, 0.76)', 'white']}> */}
      <br></br>
      <Text style={styles.titulo}>Muscle App</Text>

      <View>
        <Image source={require('../../assets/muscle.png')} style={styles.logo}/>  
      </View>

      <br></br>
      <StatusBar style="auto" />
      <Text style={styles.tituloMenor}>Email ou Usuario:</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsuario}
        value={texto}
        placeholder="email@endereço.com"
      />

      <Text style={styles.tituloMenor}>Senha:</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeSenha}
        value={senha}
        secureTextEntry={true}
        placeholder="************"
      />

      <Text style={styles.tituloMenor2}>Esqueceu a senha?</Text>
      <br></br>
      <View style={{flexDirection:"row"}}>
      <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /></View>
      <View><Text styles={styles.switch}>   Deixar conectado</Text></View>
      </View>
      <br></br>
      <br></br>
      <Text style={styles.textoComum}>Novo aqui?</Text>
      <View style={{flexDirection:"row"}}>
        <View>
          <TouchableOpacity  style={styles.butao1} onPress={() => {navigation.navigate('Registro')}}>
            <Text style={styles.butao1_text}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.butao2} onPress={verificar}>
            <Text style={styles.butao2_text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </LinearGradient> */}
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      justifyContent: 'center',
    },
  //background da tela 1:
    background_sc1: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
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
    textoComum: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
    },
    titulo: {
      //width: "102px",
      height: 47,
      left: 16,
      top: 217,
      textAlign: "center",
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
      paddingLeft:10,
      width: 293,
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: '#F7F7F7',
      borderRadius: 10,
      display: 'flex',
    },
    butao1: {
      height: 51,
      width: 168,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderColor: '#000000',
      //border: '1px solid #000000',
  },
    butao1_text: {
      //textAlign: 'center',
      alignSelf: "center",
      //fontWeight: 'bold' ,
      fontSize: 20,
      display: 'flex',
      //alignItems: 'center',
      color: '#137CDD',
      //alignContent: "center",
      marginTop: 10,
  },
    butao2: {
      width: 153,
      height: 50,
      backgroundColor: '#00A1FC',
      //border: '1px solid #000000',
      borderColor: '#000000',
      borderRadius: 10,
      left: 38,
  },
    butao2_text: {
      fontWeight: 'normal',
      fontSize: 20,
      //line-height: 25px;
      display: 'flex',
      //alignItems: 'center',
      //textAlign: 'center',
      alignSelf:"center",
      marginTop: 10,
  },
  logo: {
      width: 209,
      height: 204,
      //position: 'center',
      left: 81,
      top: 7
  },
});